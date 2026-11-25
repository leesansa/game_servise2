// (main) 그룹 공통 틀: 로딩 화면 + 사이드바. 괄호 폴더는 URL에 안 들어감.
import { Loader } from '@/components/Loader'
import { Sidebar } from '@/components/Sidebar'

const MainLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <>
      <Loader />
      <Sidebar />
      {children}
    </>
  )
}
export default MainLayout
