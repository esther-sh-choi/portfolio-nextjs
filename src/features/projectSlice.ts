import { createSlice } from "@reduxjs/toolkit";

type ProjectDataType = {
  id: number;
  title: string;
  skills: string[];
  description: string;
  technology: string[];
  image: {
    src: string;
    gif?: string;
    alt: string;
  };
  links: {
    website: string;
    githubClient?: string;
    github: string;
  };
};

export interface ProjectState {
  projectData: ProjectDataType;
  isOpen: boolean;
}

const initialState: ProjectState = {
  projectData: {
    id: 0,
    title: "",
    skills: [],
    description: "",
    technology: [],
    image: {
      src: "",
      gif: "",
      alt: "",
    },
    links: {
      website: "",
      githubClient: "",
      github: "",
    },
  },
  isOpen: false,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    openProjectModal: (state) => {
      state.isOpen = true;
    },
    closeProjectModal: (state) => {
      state.isOpen = false;
    },
    setProjectData: (state, action) => {
      state.projectData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openProjectModal, closeProjectModal, setProjectData } =
  projectSlice.actions;

export default projectSlice.reducer;
