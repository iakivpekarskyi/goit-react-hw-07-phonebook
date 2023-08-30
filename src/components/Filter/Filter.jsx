import { useDispatch, useSelector } from 'react-redux';
import { FilterWrap } from './Filter.styled';
import { FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => {
    console.log('Typed value:', event.target.value);
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterWrap>
      <FilterInput
        type="text"
        placeholder="Search for contact"
        value={filter}
        onChange={onFilterChange}
      ></FilterInput>
    </FilterWrap>
  );
};
