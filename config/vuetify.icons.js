import IconEye from '~/components/icon/eye'
import IconEyeOff from '~/components/icon/eye-off'
import IconEmail from '~/components/icon/email'
import IconCategory from '~/components/icon/category'
import IconSync from '~/components/icon/sync'
import IconGroup from '~/components/icon/group'
import IconBarChart from '~/components/icon/bar-chart'
import IconArrowLeftRight from '~/components/icon/arrow-left-right'
import IconPayment from '~/components/icon/payment'
import IconPrivacy from '~/components/icon/privacy'
import IconLive from '~/components/icon/live'
import IconLock from '~/components/icon/lock'
import IconLogout from '~/components/icon/logout'
import IconRemove from '~/components/icon/remove'
import IconChevronDown from '~/components/icon/chevron-down'
import IconAlertCircled from '~/components/icon/alert-circled'
import IconChevronRight from '~/components/icon/chevron-right'
import IconChevronLeft from '~/components/icon/chevron-left'
import IconTrendingUp from '~/components/icon/trending-up'
import IconTrendingDown from '~/components/icon/trending-down'
import IconTest from '~/components/icon/test'
import IconArrowDown from '~/components/icon/arrow-down'
import IconRadioOn from '~/components/icon/radio-on'
import IconRadioOff from '~/components/icon/radio-off'
import IconCapture from '~/components/icon/capture'
import IconDeschedule from '~/components/icon/deschedule'
import IconSearch from '~/components/icon/search'
import IconClose from '~/components/icon/close'
import IconReload from '~/components/icon/reload'
import IconAddSquared from '~/components/icon/add-squared'
import IconRemoveSquared from '~/components/icon/remove-squared'
import IconCheckboxIndeterminate from '~/components/icon/checkbox-indeterminate'
import IconClipboard from '~/components/icon/clipboard'
import IconCheckboxOn from '~/components/icon/checkbox-on'
import IconCheckboxOff from '~/components/icon/checkbox-off'
import IconAddReplace from '~/components/icon/add-replace'
import IconDefend from '~/components/icon/defend'
import IconTrash from '~/components/icon/trash'
import IconDownload from '~/components/icon/download'
import IconDisable from '~/components/icon/disable'
import IconResent from '~/components/icon/resent'
import IconLink from '~/components/icon/link'
import IconEdit from '~/components/icon/edit'
import IconShieldSuccess from '~/components/icon/shield-success'
import IconShieldFail from '~/components/icon/shield-fail'
import IconCopy from '~/components/icon/copy'
import IconETerminal from '~/components/icon/e-terminal'
import IconDocument from '~/components/icon/document'
import IconCheckAll from '~/components/icon/check-all'
import IconWifi from '~/components/icon/wifi'
import IconDotsVertical from '~/components/icon/dots-vertical'

const icons = {
  email: { component: IconEmail },
  eye: { component: IconEye },
  eyeOff: { component: IconEyeOff },
  dashboard: { component: IconCategory },
  transactions: { component: IconArrowLeftRight },
  chargebacks: { component: IconSync },
  clients: { component: IconGroup },
  reports: { component: IconBarChart },
  payByLink: { component: IconPayment },
  users: { component: IconPrivacy },
  credentials: { component: IconLock },
  logout: { component: IconLogout },
  remove: { component: IconRemove },
  info: { component: IconAlertCircled },
  trendingUp: { component: IconTrendingUp },
  trendingDown: { component: IconTrendingDown },
  refund: { component: IconSync },
  capture: { component: IconCapture },
  deschedule: { component: IconDeschedule },
  search: { component: IconSearch },
  reload: { component: IconReload },
  addSquared: { component: IconAddSquared },
  removeSquared: { component: IconRemoveSquared },
  clipboard: { component: IconClipboard },
  addReplace: { component: IconAddReplace },
  defend: { component: IconDefend },
  trash: { component: IconTrash },
  download: { component: IconDownload },
  disable: { component: IconDisable },
  resent: { component: IconResent },
  link: { component: IconLink },
  edit: { component: IconEdit },
  shieldSuccess: { component: IconShieldSuccess },
  shieldFail: { component: IconShieldFail },
  copy: { component: IconCopy },
  eTerminal: { component: IconETerminal },
  document: { component: IconDocument },
  checkAll: { component: IconCheckAll },
  wifi: { component: IconWifi },
  test: { component: IconTest },
  live: { component: IconLive },
  // Vuetify
  dotsVertical: { component: IconDotsVertical },
  dropdown: { component: IconChevronDown },
  prev: { component: IconChevronLeft },
  next: { component: IconChevronRight },
  sort: { component: IconArrowDown },
  radioOn: { component: IconRadioOn },
  radioOff: { component: IconRadioOff },
  checkboxOn: { component: IconCheckboxOn },
  checkboxOff: { component: IconCheckboxOff },
  checkboxIndeterminate: { component: IconCheckboxIndeterminate },
  clear: { component: IconClose },
  subgroup: { component: IconChevronDown },
}

export default icons
