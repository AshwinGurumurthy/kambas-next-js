export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of"
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
               <option>Percentage</option>
                <option>Marks</option>
                <option>Grades</option>
               </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
               <select id="wd-submission-type" defaultValue="Online">
               <option value="Online">Online</option>
               <option value="Offline">Offline</option>
               </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-entry">Online entry options</label>
            </td>
            <td>

<input type="radio" name="radio-text-entry" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br />

<input type="radio" name="radio-website-url" id="wd-website-url"/>
<label htmlFor="wd-website-url">Webite URL</label><br />

<input type="radio" name="radio-media-recordings" id="wd-media-recordings"/>
<label htmlFor="wd-radio-scifi">Media Recordings</label><br />

<input type="radio" name="radio-student-annotation" id="wd-student-annotation"/>
<label htmlFor="wd-radio-student-annotation">Student Annotation</label><br/>

<input type="radio" name="radio-file-upload" id="wd-file-upload"/>
<label htmlFor="wd-radio-file-upload">File Uploads</label>

            </td>
          </tr>

           <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
               <select id="wd-wd-assign-to-everyone" defaultValue="Everyone">
               <option value="Everyone">Everyone</option>
               </select>
            </td>
          </tr>

          <tr>
              <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" />
            </td>
              
          </tr>

          <tr>
              <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
              <td>
              <input type="date" id="wd-available-from" />
              </td>
          </tr>

          <tr>
              <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" />
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

