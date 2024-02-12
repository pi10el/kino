// components
import * as Filters from '@/features/Filters';
import { ParamsTags } from '@/features/ParamsTags';

export const SearchFilters = () => {
  return (
    <Filters.DropdownControl>
      <Filters.Selects />
      <Filters.Sorting />
      <Filters.SelectsRange />
      <ParamsTags />
    </Filters.DropdownControl>
  );
};
