import Table from '../molecules/table';
import { useState
 } from 'react';
const classes = {
  table: 'w-full text-sm text-left  ',
  thead: 'text-sm  uppercase bg-primary border-b text-gray-500  font-semibold',
  tbody: 'bg-white cursor-pointer',
  tr: 'text-white font-medium text-sm text-left',
  th: 'px-6 py-4  truncate',
  td: 'px-6 py-4 text-sm font-normal  tracking-tighter turncate text-primary border-t border-gray-200',
};

const TableComp = ({
  headers,
  body,
  href,
  onClick,
  responseData,
  extraclasses,
}) => {


  return (
    <div className="h-auto py-8">
      <div className="relative overflow-x-auto rounded-lg">
        <Table
          headers={headers}
          data={body}
          classes={classes}
          href={href}
          extra={extraclasses}
          onClick={onClick}
          responseData={responseData}
        />
      </div>
    </div>
  );
};

export const SelectFillIcon =()=>{
  return(
      <span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#121212"/>
<path d="M13 4L6 12.3333L3 9" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



      </span>
  )
}

export const SelectIcon =()=>{
  return(
      <span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" fill="#FEFEFE" stroke="#121212"/>
          </svg>
      </span>
  )
}

export const CheckBoxComp = (status)=>{
  return(
      <div>
          {status.status === 'true' ?
              <SelectFillIcon/> :
              status.status === 'false' ?
                  <SelectIcon/>:
                 ''
          }
      </div>
  )
}

export const SampleTableCheckBox = ({data, bodyData})=>{
  return (
      <div>
          <CheckBoxComp status={data.find((item)=> item._id === bodyData._id) ? 'true' : 'false'}/>
      </div>
  );
}


export const SampleTableNew = ({
  headerData,
  response,
  onClick,
  responseData,

                                   checkedData,
                                   clickAll,
                                   checkAllStatus,
                                   currentPage,
                                   pageSize,
                                   onPageChange,
                                   chemicalPaginationData,
                                   microPaginationData,
                                   type

                               }) => {

  return (
    <>
      <NewSampleReceivingTableComponent
        headers={headerData}
        onClick={onClick}
        responseData={responseData}
        clickAll={clickAll}
        checkAllStatus={checkAllStatus}
        body={response.map((row) => ({
          ...row,

            check:<SampleTableCheckBox data={checkedData} bodyData={row}/>,
          //   type: <p>{row.isFieldSample && row.isFieldSample === true ? 'Field Sample':'Lab Sample'}</p>,
          //   href: row.sampleStatus === '2New'?`/dashboard/sample/sampleDetails/?sampleId=${row._id}`:'',
          //   sampleId: row.sample_id.toUpperCase(),
          //   qrCode: row.qr_code.length !== 0 ?row.qr_code.find((item)=> item._id === row.sub_sample_for._id).qr.toUpperCase():'-',
          // date: (
          //   <div className="flex flex-col">
          //     <p>{dateFormat(row.createdAt, 'dd-MMM-yyyy ')}</p>
          //     <p className="text-xs font-light">
          //       {dateFormat(row.createdAt, 'h:mm a')}
          //     </p>
          //   </div>
          // ),
          // sourceData: row.source
          //   ? row.source.label
          //   : '-',
          // subSourceData: row.subSource
          //   ? row.subSource.label
          //   : '-',
            // sampleForData: row.sample_for.checklabel,
            // locationData: <p className='truncate'>{row.plant
            //     ? row.plant.name
            //     : row.schedulePlant
            //         ? row.schedulePlant.name
            //         : row.location.name}</p>,
          // status: (
          //     <Badge
          //         className={`text-light font-normal py-1 px-4 ${
          //             row.sampleStatus === 'Approved'
          //                 ? ' bg-green-500 text-white'
          //                 : row.sampleStatus === 'Reject'
          //                     ? 'bg-red-500 text-white'
          //                     : row.sameplStatus === 'Assigned'
          //                         ? 'bg-yellow-500 text-yellow-50'
          //                         : 'bg-blue-200 text-blue-700'
          //         }`}
          //     >
          //         {row.sampleStatus === 'Approved'
          //             ? 'Received'
          //             : row.sampleStatus === 'Reject'
          //                 ? 'Rejected'
          //                 : row.sampleStatus === 'Assigned'
          //                     ? 'Assigned'
          //                     : 'New'}
          //     </Badge>
          // ),
        }))}
      />
        {/* <Paging
            chemicalItems ={chemicalPaginationData}
            microItems ={microPaginationData}
            type ={type}
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}/> */}

    </>
  );
};

export const ClickCheckBoxComp = (status)=>{
  return(
      <div className="cursor-pointer">
          {status.status === 'true' ?
              <SelectFillIcon/> :
              status.status === 'false' ?
                  <SelectIcon/>:
                  ''
          }
      </div>
  )
}

export const NewSampleReceivingTableComponent = ({ headers,
  body,
  href,
  onClick,
  responseData,
  extraclasses,clickAll,checkAllStatus}) =>{
return (
<div className="h-auto py-8">
<div className="relative overflow-x-auto rounded-lg">
<SampleReceivingTable
headers={headers}
data={body}
classes={classes}
href={href}
extra={extraclasses}
onClick={onClick}
responseData={responseData}
clickAll={clickAll}
checkAllStatus={checkAllStatus}
/>
</div>
</div>
);
}

export const SortIcon = ({classname}) =>{
  return(
      <span className={classname}>
          <svg width="10" height="20" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.46987 6.53025L4.28581 3.9815C4.25061 3.94044 4.20694 3.90748 4.1578 3.88488C4.10866 3.86229 4.05521 3.85059 4.00113 3.85059C3.94704 3.85059 3.89359 3.86229 3.84445 3.88488C3.79531 3.90748 3.75164 3.94044 3.71644 3.9815L1.53238 6.53025C1.32394 6.77353 1.49675 7.14931 1.81706 7.14931H6.18581C6.50612 7.14931 6.67894 6.77353 6.46987 6.53025Z" fill="#FEFEFE"/>
<path d="M1.53279 9.46965L3.71685 12.0184C3.75205 12.0595 3.79572 12.0924 3.84486 12.115C3.894 12.1376 3.94745 12.1493 4.00154 12.1493C4.05562 12.1493 4.10907 12.1376 4.15821 12.115C4.20735 12.0924 4.25102 12.0595 4.28622 12.0184L6.47029 9.46965C6.67872 9.22637 6.50591 8.85059 6.1856 8.85059H1.81685C1.49654 8.85059 1.32372 9.22637 1.53279 9.46965Z" fill="#FEFEFE"/>
</svg>

      </span>
  )
}

export const AscenSort = ({classname}) => {
  return (
      <span className={classname}>
          <svg width="10" height="11" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.53279 3.46965L3.71685 6.0184C3.75205 6.05946 3.79572 6.09242 3.84486 6.11502C3.894 6.13761 3.94745 6.14931 4.00154 6.14931C4.05562 6.14931 4.10907 6.13761 4.15821 6.11502C4.20735 6.09242 4.25102 6.05946 4.28622 6.0184L6.47029 3.46965C6.67872 3.22637 6.50591 2.85059 6.1856 2.85059H1.81685C1.49654 2.85059 1.32372 3.22637 1.53279 3.46965Z" fill="#FEFEFE"/>
          </svg>

      </span>
  )
}

export const SampleReceivingTable = ({
  headers,
  data,
  classes,
  extra,
  onClick,
  responseData,
   clickAll,
   checkAllStatus
}) => {
const lastIndex = headers.length - 1;
let sortedData;

const [sortOrder, setSortOrder] = useState('none'); // State to track the sort order

const sortData = (field, ascending) => {
return data.sort((a, b) => {
if (field === 'date') {
const dateA = a.createdAt;
const dateB = b.createdAt;
return ascending ? (dateA - dateB) : (dateB - dateA);
} else if(field === 'locationData'){
const valueA = a[field].props.children.toString().toLowerCase();
const valueB = b[field].props.children.toString().toLowerCase();
return ascending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
}else {
const valueA = a[field].toString().toLowerCase();
const valueB = b[field].toString().toLowerCase();
return ascending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
}
});
};

const handleSortClick = (field) => {
let newSortOrder = { ...sortOrder };

if (!newSortOrder[field]) {
newSortOrder[field] = 'asc';
} else if (newSortOrder[field] === 'asc') {
newSortOrder[field] = 'desc';
} else if (newSortOrder[field] === 'desc') {
newSortOrder[field] = 'asc';
}

headers.forEach((item) => {
if (item.name !== field) {
newSortOrder[item.name] = '';
}
});

setSortOrder(newSortOrder);
const ascending = newSortOrder[field] === 'asc';
const sortedData = sortData(field, ascending);
};
const renderSortIcon = (field) => {
if(sortOrder[field] === 'none') {
return(
<div className={"pl-1"}>
<SortIcon />
</div>
)
}
else if (sortOrder[field] === 'asc') {
return (
<div className={"pl-1 pt-1"}>
<AscenSort />
</div>
);
} else if (sortOrder[field] === 'desc') {
return (
<div className={"pl-1 pt-1"}>
{/* <DescSort /> */}
</div>
);
} else {
return(
<div className={"pl-1"}>
{/* <SortIcon /> */}
</div>)
}
};
sortedData = sortData('date', true);

return (
  <table className={classes.table}>
      <thead className={classes.thead}>
      <tr className={classes.tr}>

      {headers.map((item, index) => (
      <th
      className={`${classes.th} ${index === 0 && 'rounded-tl-lg'}  ${
      index === lastIndex && 'rounded-tr-lg'
      }`}
      scope="col"
      onClick={()=> index === 0 ? clickAll('click'):handleSortClick(item.name)}
      >
      <div className="flex flex-row">
      {index === 0 ? <ClickCheckBoxComp status={checkAllStatus === true ? "true": "false"} /> : typeof item.label === 'function' ? item.label() : item.label}
      {!(index === 0) && <div>{renderSortIcon(item.name)}</div>}
      </div>

      </th>
      ))}
      </tr>
      </thead>

      <tbody className={classes.tbody}>
      {sortedData.map((dataRow, index) => {
      return (

      <tr>
      {headers.map((item,index) => {
      return (
      <td
        key={item.name}
        className={`${classes.td} ${extra}`}
        onClick={() => {
            if(index === 0){
                responseData && responseData(dataRow);
            }else {
                onClick && onClick(dataRow);
            }
        }}
      >
        {typeof dataRow[item.name] === 'function'
            ? dataRow[item.name]()
            : dataRow[item.name]}
      </td>
      );
      })}
      </tr>

      );
      })}
      </tbody>
  </table>
);
};

export default TableComp;
