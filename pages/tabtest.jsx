import React,{useEffect, useState} from 'react'
import { SampleTableNew } from '../components/organism/tablecomp'

const Tabtest = () => {
    const [checkedNewData, setCheckedNewData] = useState([])
    const [allClick, setAllClick] = useState(false)
    const headerDataNew = [
        // { name: 'date',
        //   label: 'Date' },
        {
          name: 'sampleId',
          label: 'Sample ID',
        },
        {
          name: 'qrCode',
          label: 'QR Code',
        },
        {
          name: 'sourceData',
          label: 'Source Type',
        },
        {
          name: 'locationData',
          label: 'Location',
        },
        {
          name: 'subSourceData',
          label: 'Sub Location',
        },
        // {
        //   name: 'type',
        //   label: 'Type',
        // }
      ];

      const newFilteredSample = [
        {   _id:345657685675645,
            sampleId:'1234567890',
            qrCode:"https://www.google.com",
            sourceData : "Google",  
            locationData :"Bangalore, India" ,
            subSourceData  :"Karnataka, Bangalore",
            type:"Covid-19"
            },{
                _id :35674532364,
                sampleId:'0987654321',
                qrCode:"https://www.google.com",    
                sourceData : "Google",
                locationData :"patna, India" ,
                subSourceData  :"patna, Bihar",
                type:"Covid-19"}
        
      ]


      const clickAll = (e)=>{
        setAllClick(!allClick)
      }

      const onNewCheck=(data)=>{
        // console.log(data,'data')
        const exist = checkedNewData.find(
            (element) => element._id === data._id
        );
        console.log(exist,'exit')
        if (exist) {
          setCheckedNewData(
              checkedNewData.filter((single) => single._id !== data._id)
          );
        } else {
          setCheckedNewData([...checkedNewData, data]);
        }
      }
    //     if(samplePermission.actions === true){
      
    
    //   }
      
    useEffect(()=>{
        console.log(checkedNewData,'cehc')
    },[checkedNewData])

    useEffect(()=>{
        if(allClick === true){
          setCheckedNewData(newFilteredSample)
        }else {
          setCheckedNewData([])
        }
       },[allClick])
  return (
    <div>
     
     <SampleTableNew
                  response={newFilteredSample}
                  headerData={[{ name: 'check', label:'' },...headerDataNew]}
                  checkedData={checkedNewData}
                  responseData={(e) => onNewCheck(e)}
                //   rejectSample={(e) => rejectSample(e)}
                //   approveSample={(e) => approveSample(e)}
                //   samplePermission={samplePermission}
                  clickAll={clickAll}
                  onClick={(e)=> console.log(e,'onclick') }
                  checkAllStatus={allClick}
                //   currentPage ={currentPage}
                //   pageSize ={pageSize}
                //   onPageChange ={onPageChange}
                //   chemicalPaginationData ={chemicalPaginationData}
                //   microPaginationData ={microPaginationData}
                //   type ={type}

              />
    </div>
  )
}

export default Tabtest
