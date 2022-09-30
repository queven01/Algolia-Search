import { useNumericMenu} from 'react-instantsearch-hooks-web';


export function NumericMenu(props) {
  const { items, refine } = useNumericMenu(props);

  return (
    <div>
      <ul className="ais-NumericMenu-list">
        {items.map((item) => (
          <li
            key={item.value}>
            <label className="ais-NumericMenu-label">
              <input
                className="ais-NumericMenu-radio"
                type="radio"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span className="ais-NumericMenu-labelText">{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default NumericMenu;