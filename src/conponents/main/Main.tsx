import React, { FC } from 'react';
import Map from '../../conponents/map/Map';
import Table from '../../conponents/table/Table';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const Main: FC = () => {
 return (
  <Splitter>
   <SplitterPanel size={20}>
    <Table />
   </SplitterPanel>
   <SplitterPanel size={80}>
    <Map />
   </SplitterPanel>
  </Splitter>
 );
};
export default Main;
