import {useEffect, useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { FilterMatchMode } from 'primereact/api';


const Clients = () => {
    const [clients, setClients] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }});
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/client_list/');
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    void fetchClients();
  }, []);

    console.log(clients);



    return (
        <Card
            title="Clientes."
            subTitle={'base de datos clientes'}
            style={{ margin: '300px 50px'}}
        >

                <DataTable
                    header={header}
                    value={clients}
                    paginator rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '50rem' }}
                    dataKey={'id'}
                    filters={filters}
                    globalFilter={globalFilterValue}
                >
                    <Column field="name" header="Nombre" style={{ width: '25%' }}></Column>
                    <Column field="type" header="Tipo" style={{ width: '25%' }}></Column>
                    <Column field="email" header="E-Mail" style={{ width: '25%' }}></Column>
                    <Column field="phone" header="Telefono" style={{ width: '25%' }}></Column>
                </DataTable>

        </Card>
    )
}
export default Clients;