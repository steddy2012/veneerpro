import { Button, Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const TeamTable = ({ userList, onDeleteUser }) => {
  return (
    <Box className="item_usersList">
      {/* Users List Container */}
      <div className="users-container">
        <Table variant="striped" size="md">
          <Thead>
            <Tr>
              <Th>User ID</Th>
              <Th>First name</Th>
              <Th>Last name</Th>
              <Th>Email</Th>
              <Th>Admin</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userList.length > 0 ? (
              userList.map((user) => (
                <Tr key={user.user_id}>
                  <Td>{user.user_id}</Td>
                  <Td>{user.first_name}</Td>
                  <Td>{user.last_name}</Td>
                  <Td>{user.email_address}</Td>
                  <Td>{user.admin ? "Yes" : "No"}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() =>
                        onDeleteUser(user.user_id, user.company_id)
                      }
                    >
                      X
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="6">No users found.</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </Box>
  );
};

export default TeamTable;
