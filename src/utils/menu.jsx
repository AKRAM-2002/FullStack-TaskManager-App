import ListAltIcon from '@mui/icons-material/Assignment';
import TimerIcon from '@mui/icons-material/AvTimer';
import InsertChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';


const dashboardMenu = [
  {
    id: 1,
    label: 'All Tasks',
    icon: <ListAltIcon />,
    path: '/tasks',
    // submenu: [
    //   {
    //     label: 'Completed',
    //     icon: <CheckCircleIcon />,
    //     path: '/tasks/completed',
    //   },
    //   {
    //     label: 'Incomplete',
    //     icon: <HighlightOffIcon />,
    //     path: '/tasks/incomplete',
    //   },
    // ],
  },
  {
    id: 2,
    label: 'Pomodoro',
    icon: <TimerIcon />,
    path: '/pomodoro',
  },
  {
    id: 3,
    label: 'Analytics',
    icon: <InsertChartIcon />,
    path: '/analytics',
  },
  {
    id: 4,
    label: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings',
  },
];

export default dashboardMenu;