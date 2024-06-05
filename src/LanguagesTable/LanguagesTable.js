export const LanguagesTable = (props) => (
  <table border={props.border}>
    <thead>
      <tr>
        <th>Language</th>
        <th>Level</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.languages.map((language, index) => (
        <tr key={index}>
          <td className="favorite">{language.name}</td>
          <td>{language.level}</td>
          <td>
            <a href="#" className="delete-row">
              &#10006;
            </a>
            <a href="#" className="edit-row">
              &#9998;
            </a>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td>
          <input type="text" name="language" placeholder="Enter Language" />
        </td>
        <td>
          <input type="text" name="level" placeholder="Enter Level" />
        </td>
        <td>
          <button>Save</button>
        </td>
      </tr>
    </tfoot>
  </table>
);
