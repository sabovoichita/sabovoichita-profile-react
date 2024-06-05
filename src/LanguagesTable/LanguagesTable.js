// function x(props) {
//   const team = props.teams;
//   const border = props.border;
//   const { teams, border } = props;
// }

function getValues() {
  const name = document.querySelector("input[name='language']").value;
  const level = document.querySelector("input[name='level']").value;

  const language = {
    name,
    level,
  };
  return language;
}

export const LanguagesTable = ({ languages, border, onSubmit, onDelete }) => (
  <form
    id="languagesForm"
    onSubmit={(e) => {
      e.preventDefault();
      const values = getValues();
      //   console.warn("values", values);
      onSubmit(values);
    }}
  >
    <table border={border}>
      <thead>
        <tr>
          <th>Language</th>
          <th>Level</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {languages.map((language, index) => (
          <tr key={index}>
            <td className="favorite">{language.name}</td>
            <td>{language.level}</td>
            <td>
              <a
                href="#"
                className="delete-row"
                onClick={(e) => {
                  onDelete(language.id);
                }}
              >
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
            <button type="submit">Save</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </form>
);
