import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import { /*GroupFilters,*/ SortByOptions } from 'constants/filter.constants';
import FilterActions from 'actions/filter.actions';
import { formatNumber, formatCategory } from 'utils';

import './styles.scss';

const ExploreFilterHeader = ({ loading, category }) => {
  const dispatch = useDispatch();

  const { count } = useSelector(state => state.Tokens);
  const { /*groupType,*/ sortBy } = useSelector(state => state.Filter);

  // const handleGroupTypeChange = e => {
  //   const newGroupType = e.target.value;
  //   dispatch(FilterActions.updateGroupTypeFilter(newGroupType));
  // };

  const handleSortByChange = e => {
    const newSortBy = e.target.value;
    dispatch(FilterActions.updateSortByFilter(newSortBy));
  };

  return (
    <div className="filterHeaderRoot">
      <div className="filterHeaderLeft">
        <label className="filterResultLabel">
          {loading ? (
            <Skeleton
              width={100}
              height={24}
              style={{ background: 'var(--color-skel)' }}
            />
          ) : (
            `${formatNumber(count)} Result${count !== 1 ? 's' : ''}
            ${
              category === null ? '' : `- Category: ${formatCategory(category)}`
            }`
          )}
        </label>
      </div>
      <div className="filterSelectGroup">
        {/* <FormControl className="filterHeaderFormControl">
          <Select
            value={groupType}
            onChange={handleGroupTypeChange}
            className="selectBox"
            classes={{
              select: 'selectInner',
              selectMenu: 'selectMenu',
              icon: 'selectIcon',
            }}
            MenuProps={{
              classes: {
                paper: 'menuPropsPaper',
                list: 'menuItemList',
              },
            }}
            IconComponent={ExpandMoreIcon}
          >
            {GroupFilters.map((filter, idx) => {
              return (
                <MenuItem
                  value={filter.value}
                  key={idx}
                  className="menuItem"
                  classes={{ selected: 'menuItemSelected ' }}
                >
                  {filter.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl> */}
        <FormControl className="filterHeaderFormControl">
          <Select
            value={sortBy}
            onChange={handleSortByChange}
            className="selectBox"
            classes={{
              select: 'selectInner',
              selectMenu: 'selectMenu',
              icon: 'selectIcon',
            }}
            MenuProps={{
              classes: {
                paper: 'menuPropsPaper',
                list: 'menuItemList',
              },
            }}
            IconComponent={ExpandMoreIcon}
          >
            {SortByOptions.map((option, idx) => {
              return (
                <MenuItem
                  value={option.id}
                  key={idx}
                  className="menuItem"
                  classes={{ selected: 'menuItemSelected ' }}
                >
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ExploreFilterHeader;