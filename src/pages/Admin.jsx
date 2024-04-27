import React, { useState } from "react";
import { Box, Heading, VStack, Input, Button, Select } from "@chakra-ui/react";

function Admin() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [permission, setPermission] = useState("user");

  const createUser = () => {
    setUsers([...users, { name: newUser, permission }]);
    setNewUser("");
    setPermission("user");
  };

  const deleteUser = (userName) => {
    setUsers(users.filter((user) => user.name !== userName));
  };

  const changePermission = (userName, newPermission) => {
    setUsers(users.map((user) => (user.name === userName ? { ...user, permission: newPermission } : user)));
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Admin Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Box h="40px" bg="teal.500">
          User Management
          <VStack>
            <Input placeholder="Enter user name" value={newUser} onChange={(e) => setNewUser(e.target.value)} />
            <Select placeholder="Select permission" value={permission} onChange={(e) => setPermission(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Select>
            <Button onClick={createUser}>Create User</Button>
            {users.map((user) => (
              <Box key={user.name}>
                {user.name} - {user.permission}
                <Button onClick={() => deleteUser(user.name)}>Delete</Button>
                <Button onClick={() => changePermission(user.name, user.permission === "user" ? "admin" : "user")}>Toggle Permission</Button>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box h="40px" bg="teal.500">
          Menu Items Management
        </Box>
      </VStack>
    </Box>
  );
}

export default Admin;
