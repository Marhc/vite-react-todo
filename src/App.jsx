// App.jsx
import { Container, Typography } from "@mui/material";

import TaskManager from "./components/TaskManager";

const App = () => (
  <Container maxWidth={'sm'}>
    <Typography
      variant="h3"
      align="center"
      marginTop={3}
      marginBottom={5}
      fontFamily="cursive"
    >
      React Todo App
    </Typography>

    <TaskManager />     
  </Container>
);

export default App;
