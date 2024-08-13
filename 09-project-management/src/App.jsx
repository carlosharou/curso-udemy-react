import { useState } from 'react';
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [ projectsState, setProjectsState ] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });


    const handleStartAddProject = () => {
        setProjectsState( prevStatus => {
            return {
                ...prevStatus,
                selectedProjectId: null
            }
        });
    }


    const handleAddProject = (projectData) => {
        setProjectsState(prevStatus => {
            const newProject = {
                ...projectData,
                id: Math.random()
            };

            return {
                ...prevStatus,
                selectedProjectId: undefined,
                projects: [
                    ...prevStatus.projects,
                    newProject
                ]
            };
        });
    }


    const handleCancelAddProject = () => {
        setProjectsState( prevStatus => {
            return {
                ...prevStatus,
                selectedProjectId: undefined
            }
        });
    }


    const handleSelectProject = (id) => {
        setProjectsState( prevStatus => {
            return {
                ...prevStatus,
                selectedProjectId: id
            }
        });
    }


    const handleDeleteProject = () => {
        setProjectsState( prevStatus => {
            return {
                ...prevStatus,
                selectedProjectId: undefined,
                projects: prevStatus.projects.filter((_project) => _project.id !== projectsState.selectedProjectId)
            }
        });
    }


    const handleAddTask = (text) => {
        setProjectsState(prevStatus => {
            const newTask = {
                text,
                id: Math.random(),
                projectId: prevStatus.selectedProjectId
            };

            return {
                ...prevStatus,
                tasks: [
                    ...prevStatus.tasks,
                    newTask
                ]
            };
        });
    }


    const handleDeleteTask = (id) => {
        setProjectsState( prevStatus => {
            return {
                ...prevStatus,
                tasks: prevStatus.tasks.filter((_task) => _task.id !== id)
            }
        });
    }


    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);


    let content = (
        <SelectedProject 
            project={selectedProject} 
            onDelete={handleDeleteProject} 
            onAddTask={handleAddTask} 
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.tasks}
        />
    );

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }


    return (
        <>
            <main className="h-screen my-8 flex gap-8">
                <ProjectsSidebar 
                    onStartAddProject={handleStartAddProject} 
                    projects={projectsState.projects}
                    onSelectProject={handleSelectProject}
                    selectedProjectId={projectsState.selectedProjectId}
                />
                {content}
            </main>
        </>
    );
}

export default App;
