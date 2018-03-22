import sorting from '../../reducers/sorting';
import { toggleSorting } from '../../actions/sorting';
import { SORT_DESCENDING, SORT_ASCENDING } from '../../constants';

describe('Sorting reducer', () => {
  it('should handle initial state', () => {
    expect(sorting(undefined, { type: '@@INIT' })).toEqual({});
  });

  it('should handle sorting properly', () => {
    const sortedState = sorting({}, toggleSorting('name'));
    expect(sortedState).toEqual({ column: 'name', direction: SORT_ASCENDING });
    const sortedStateDesc = sorting(sortedState, toggleSorting('name'));
    expect(sortedStateDesc).toEqual({
      column: 'name',
      direction: SORT_DESCENDING
    });
    const resetedState = sorting(sortedStateDesc, toggleSorting('name'));
    expect(resetedState).toEqual({});
  });
});
