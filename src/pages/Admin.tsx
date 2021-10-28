import { Box, Stack, Td, Th, Tr,Thead, TableCaption, Table, Tbody, Tfoot, Button} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'

export default function Admin(){
  const [users, setUsers] = useState([]) 

  useEffect(() => {
    async function loadUsers() {
      //setIsLoadingItems(true)
      await fetch('http://localhost:5000/api/Users')
        .then(res => {
          setUsers(res)
        })
        .catch(error => {
          console.log({ errorLoadItems: error })
        })
        .finally(() => {
          //setIsLoadingItems(false)
        })
    }
    loadUsers()
  }, [])

  return (
    <Box p="10">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((users, index)=>(
            <Tr key={index}>
              <Td>{users.nome}</Td>
              <Td>{users.email}</Td>
              <Td><Button>Deletar</Button></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
