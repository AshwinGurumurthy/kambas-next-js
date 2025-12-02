"use client"
import { useParams } from "next/navigation";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useEffect, useState } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();

  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  const {currentUser}  = useSelector((state: RootState) => state.accountReducer);

  /*const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);*/

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };


  const onCreateModuleForCourse = async () => {
  if (!cid) return;
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const newModule = { name: moduleName, course: courseId };
  const createdModule = await client.createModuleForCourse(courseId, newModule);
dispatch(setModules([...modules, createdModule]));
};

const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };
  
  return (
    <div className="p-4">
      {currentUser!="STUDENT" && <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={onCreateModuleForCourse} />}

      <br /><br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">

        {modules
          .map((module) => (
            <ListGroupItem
              key={module._id} 
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> 
                {!module.editing && module.name}
                { module.editing && (
              <FormControl className="w-50 d-inline-block"
               onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
               onKeyDown={(e) => {
                       if (e.key === "Enter") {
                     onUpdateModule({ ...module, editing: false });
                }

                    }}
                    defaultValue={module.name} />
                )}
               
      <ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />

              </div>

              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson:any) => (
                    <ListGroupItem
                      key={lesson._id || lesson._id || lesson.name} 
                      className="wd-lesson p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}

      </ListGroup>
    </div>
  );
}
