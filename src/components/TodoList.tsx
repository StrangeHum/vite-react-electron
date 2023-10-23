type input = {
  title: string;
  list: Array<string>;
};

export const TodoList = ({ title, list }: input) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              <input type="checkbox" />
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
