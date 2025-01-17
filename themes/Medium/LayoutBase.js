import CommonHead from '@/components/CommonHead'
import React from 'react'
import Footer from './components/Footer'
import InfoCard from './components/InfoCard'
import RevolverMaps from './components/RevolverMaps'
import CONFIG_MEDIUM from './config_medium'
import Tabs from '@/components/Tabs'
import TopNavBar from './components/TopNavBar'
import SearchInput from './components/SearchInput'
import BottomMenuBar from './components/BottomMenuBar'
import { useGlobal } from '@/lib/global'
import JumpToTopButton from './components/JumpToTopButton'

/**
 * 基础布局 采用左右两侧布局，移动端使用顶部导航栏

 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, meta, showInfoCard = true, slotRight } = props
  const { locale } = useGlobal()

  return (
    <div id='container' className='bg-white w-full h-full min-h-screen justify-center'>
      <CommonHead meta={meta} />
      <main id='wrapper' className='flex justify-between w-full h-full mx-auto'>
        {/* 桌面端左侧菜单 */}
        {/* <LeftMenuBar/> */}

        <div className='w-full'>
          {/* 移动端顶部菜单 */}
          <TopNavBar />
          <div className='px-5 max-w-5xl justify-center mx-auto'>
            {children}
          </div>
        </div>

        {/* 桌面端右侧 */}
        <div className='hidden xl:block border-l w-96'>
          <Tabs className='py-14 px-6 sticky top-0'>
            {slotRight}
            <div key={locale.NAV.ABOUT}>
              <SearchInput className='mt-6  mb-12' />
              {showInfoCard && <InfoCard />}
              {CONFIG_MEDIUM.WIDGET_REVOLVER_MAPS === 'true' && <RevolverMaps />}
            </div>
          </Tabs>
        </div>
      </main>

      {/* 移动端底部 */}
      <Footer />
      <BottomMenuBar className='block md:hidden' />
    </div>
  )
}

export default LayoutBase
