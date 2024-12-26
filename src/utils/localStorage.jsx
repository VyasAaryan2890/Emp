const employees = [
  {
    id: 1,
    email: "em1@a.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete the monthly report",
        date: "2024-12-27",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Update client information",
        date: "2024-12-28",
        category: "Administration",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Prepare presentation for the meeting",
        date: "2024-12-29",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "em2@a.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Fix bugs in the system",
        date: "2024-12-26",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Conduct team training session",
        date: "2024-12-30",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Review marketing strategy",
        date: "2024-12-31",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "em3@a.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Organize project files",
        date: "2024-12-28",
        category: "Administration",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Research new tools",
        date: "2025-01-02",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Update system documentation",
        date: "2025-01-05",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "em4@a.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Prepare client presentation",
        date: "2025-01-01",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Analyze sales data",
        date: "2025-01-04",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Plan quarterly goals",
        date: "2025-01-07",
        category: "Planning",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "em5@a.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Prepare team meeting agenda",
        date: "2025-01-03",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Conduct performance reviews",
        date: "2025-01-08",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Update website content",
        date: "2025-01-10",
        category: "Content",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "ad@a.com",
    password: "123",
  },
];

export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLoaclStorage = () =>{
 const data =  localStorage.getItem('employees')
 console.log(JSON.parse(data));
 
}
