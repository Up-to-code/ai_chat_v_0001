import HeroSection from '@/components/landing/Hero';
import Navigation from '@/components/landing/navBar';
 
async function page() {
   return (
    <div className="min-h-screen bg-slate-50 font-sans">

     <Navigation/>
     <HeroSection  key={95}/>
    </div>
  )
}

export default page