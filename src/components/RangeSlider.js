import { useConnector } from 'react-instantsearch-hooks-web';
import connectRange from 'instantsearch.js/es/connectors/range/connectRange';

export function useRangeSlider(props) {
  return useConnector(connectRange, props);
}

export function RangeSlider(props) {
  const {
    start,
    range,
    canRefine,
    refine,
    sendEvent,
  } = useRangeSlider(props);

  return (   
    <div>
        {item.label}
        <input onChange={() => refine(item.value)} type="range" min={start.value} max="100" value="50" class="slider" id="myRange"></input>
    </div>
  );
}