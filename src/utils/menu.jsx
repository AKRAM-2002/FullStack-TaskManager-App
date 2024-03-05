import ListAltIcon from '@mui/icons-material/Assignment';
import TimerIcon from '@mui/icons-material/AvTimer';
import InsertChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import iconDropdown from '../assets/icons/drop-down-icon-white.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import iconDropdownBlack from '../assets/icons/drop-down-icon-black.png';


const dashboardMenu = [
  {
    id: 1,
    label: 'All Tasks',
    icon: <ListAltIcon />,
    iconRightWhite: iconDropdown,
    iconRightBlack : iconDropdownBlack,
    path: '/tasks',
    submenu: [
      {
        label: 'Completed',
        icon: <CheckCircleIcon />,
        path: '/tasks/completed',
      },
      {
        label: 'Incomplete',
        icon: <HighlightOffIcon />,
        path: '/tasks/incomplete',
      },
    ],
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