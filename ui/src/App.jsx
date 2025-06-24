import "./App.css";
import { useEffect, useState } from "react";
import {
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { createDockerDesktopClient } from "@docker/extension-api-client";

// obtain docker desktop extension client
const ddClient = createDockerDesktopClient();

function App() {
	const [containers, setContainers] = useState([]);

	useEffect(() => {
		// List all containers
		ddClient.docker.cli
			.exec('ps', ['--all', '--format', '"{{json .}}"'])
			.then((result) => {
				// result.parseJsonLines() parses the output of the command into an array of objects
				setContainers(result.parseJsonLines());
			});
	}, []);

	return (
		<Stack>
			<Typography data-testid="heading" variant="h3" role="title">
				Container list
			</Typography>
			<Typography
				data-testid="subheading"
				variant="body1"
				color="text.secondary"
				sx={{ mt: 2 }}
			>
				Simple list of containers using Docker Extensions SDK.
			</Typography>
			<TableContainer sx={{ mt: 2 }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Contain id</TableCell>
							<TableCell>Image</TableCell>
							<TableCell>Command</TableCell>
							<TableCell>Created</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{containers.map((container) => (
							<TableRow
								key={container.ID}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell>{container.ID}</TableCell>
								<TableCell>{container.Image}</TableCell>
								<TableCell>{container.Command}</TableCell>
								<TableCell>{container.CreatedAt}</TableCell>
								<TableCell>{container.Status}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Stack>
	);
}

export default App;
