import UnderlinedText from '@/components/decorators/UnderlinedText'
import HeroSection from './HeroSection'
import TodaysHighlight from './TodaysHighlight'
import MasonryGrid from './MasonryGrid'
import RotatedText from '@/components/decorators/RotatedText'

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="mb-20 mt-12 ">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center">
            Today's {''}
            <UnderlinedText className="underline-offset-8 md:underline-offset-[12px] decoration-wavy">
              Highlights
            </UnderlinedText>
            <span className="text-2xl md:text-4xl ml-1">👇</span>
          </p>

          {/* Featured Post */}

          <div className="flex flex-col gap-10 mt-10">
            <TodaysHighlight />
            <div className="mt-24 ">
              <p className="text-2xl md:text-5xl text-center tracking-tighter font-bold">
                Meet the <RotatedText>Stars</RotatedText> of Our Farm
              </p>
              <MasonryGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthScreen
