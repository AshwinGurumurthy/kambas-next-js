export default function Modules() {
  return (
    <div>
      <button> Collapse all </button>
      <button> View Progress </button>
      <select id="wd-publish">
   <option value="PUBLISHALL">Publish All</option>
   </select>
      <button> + Module </button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Introduction to HTML</span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML syntax</li>
                <li className="wd-content-item">HTML and its tags </li>
                <li className="wd-content-item">Building your first website</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Styling with CSS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Syntax</li>
                <li className="wd-content-item">Other useful features associated with CSS</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}

