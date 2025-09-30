/**
 * Icon definitions for Amigo Invisible app
 * Centralized icon management using Lucide React Native
 */

// Import icons from lucide-react-native
import {
  ArrowLeft,
  Settings,
  Plus,
  Trash2,
  Gift,
  Users,
  User,
  Mail,
  Eye,
  EyeOff,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Check,
  X,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Camera,
  Image,
  Upload,
  Download,
  Share,
  Heart,
  Star,
  Bell,
  Home,
  Menu,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  HelpCircle,
  Loader,
  RefreshCw,
  LogOut,
  Lock,
  Unlock,
  Shield,
  Copy,
  ExternalLink,
  QrCode,
  Scan,
  UserPlus,
  UserMinus,
  Crown,
  Sparkles,
} from "lucide-react-native";

/**
 * Centralized icon exports with semantic names
 */
export const icons = {
  // Navigation
  back: ArrowLeft,
  menu: Menu,
  close: X,

  // Actions
  add: Plus,
  edit: Edit,
  delete: Trash2,
  search: Search,
  filter: Filter,
  more: MoreVertical,
  settings: Settings,
  refresh: RefreshCw,
  copy: Copy,
  share: Share,

  // Confirmation
  check: Check,
  cancel: X,

  // Directional
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,

  // User & Auth
  user: User,
  users: Users,
  userAdd: UserPlus,
  userRemove: UserMinus,
  login: Lock,
  logout: LogOut,

  // Communication
  mail: Mail,
  phone: Phone,
  bell: Bell,

  // Visibility
  show: Eye,
  hide: EyeOff,

  // Media
  camera: Camera,
  image: Image,
  upload: Upload,
  download: Download,

  // App specific
  gift: Gift,
  home: Home,
  crown: Crown,
  sparkles: Sparkles,
  qrCode: QrCode,
  scan: Scan,

  // Status & Feedback
  info: Info,
  warning: AlertCircle,
  error: XCircle,
  success: CheckCircle,
  help: HelpCircle,
  loading: Loader,

  // Favorites
  heart: Heart,
  star: Star,

  // Time & Location
  calendar: Calendar,
  clock: Clock,
  location: MapPin,

  // Security
  lock: Lock,
  unlock: Unlock,
  shield: Shield,

  // External
  externalLink: ExternalLink,
} as const;

/**
 * Icon size presets
 */
export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
} as const;

/**
 * Default icon props for consistency
 */
export const defaultIconProps = {
  size: iconSizes.md,
  strokeWidth: 2,
} as const;

/**
 * Type definitions
 */
export type IconName = keyof typeof icons;
export type IconSize = keyof typeof iconSizes;
export type IconComponent = (typeof icons)[IconName];
