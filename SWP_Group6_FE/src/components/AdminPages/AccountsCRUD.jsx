import AdminMenuBar from "./AdminMenuBar"
import axios from "axios"
import {Menu} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
  } from '@chakra-ui/react'

  {/*accounts DTO*/}
  var AccountsDTO = {
    accID : Number,
    accName : String,
    accPass : String,
    accEmail : String,
    dob : Date,
    gender :  Boolean,
    role : String,
    isActivated: Boolean,
    isApproved: Boolean
  }
  
export default function Accounts(){
    const [accounts,setAccounts] = useState([]);

    const fetchAccounts= async (id) => {
        const { data } = await axios.get(
      "http://localhost:5121/api/Account",
        )
    const accounts = data;
    setAccounts(accounts.data);
    console.log(accounts);
     };

     useEffect(() => {
         fetchAccounts();
         
       }, []);
    return(
        <>
            <AdminMenuBar></AdminMenuBar>
            {/* Table
            <Box overflowX="auto">
            <TableContainer>
                <Table variant="simple">
                <Thead>
                    <Tr>
                    <Th>Account Name</Th>
                    <Th>Email</Th>
                    <Th>Role</Th>
                    <Th isNumeric>Created Date</Th>
                    <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {accounts.map((acc) => (
                    <Tr key={acc.id}>
                        <Td>{acc.name}</Td>
                        <Td>{acc.email}</Td>
                        <Td>{acc.role}</Td>
                        <Td>
                        <Box
                            px={2}
                            py={1}
                            borderRadius="full"
                            bg={account.status === 'active' ? 'green.100' : 'red.100'}
                            color={account.status === 'active' ? 'green.700' : 'red.700'}
                            display="inline-block"
                        >
                            {account.status}
                        </Box>
                        </Td>
                    </Tr>
                    ))}
                </Tbody>
                </Table>
            </TableContainer>
            </Box>
            */}
            
        </>
        
    )

}