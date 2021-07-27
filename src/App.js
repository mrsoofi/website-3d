import "./App.css";
import SectionComp from "./components/Section";
import SectionHero from "./components/SectionHero";

//Viedeos
// import video1 from "./videos/Wisr Personal Loans- For Smarter Money Decisions - Wisr.mp4";
import video2 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 2.m4v";
import video3 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 3.m4v";
import video4 from "./videos/OptimizeVideo/Wisr Personal Loans- A Smarter Way To Borrow - Wisr.m4v";
import video5 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 4.m4v";
import video6 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 5.m4v";
import video7 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 6.m4v";
import videoMobile2 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 7.m4v";
import videoMobile3 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 8.m4v";
import videoMobile4 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 9.m4v";
import videoMobile5 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 10.m4v";
import videoMobile6 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 11.m4v";
import videoMobile7 from "./videos/OptimizeVideo/Wisr Personal Loans- For Smarter Money Decisions - Wisr 12.m4v";

//hooks
import useWindowDimensions from "./hooks/useWindowDimensions";
import Footer from "./components/Footer";
//dependenci

function App() {
  const { width } = useWindowDimensions();

  return (
    <div className="App">
      <SectionHero />
      {width > 767 ? (
        <>
          <SectionComp
            matn1="طراحی منحصر به فرد"
            matn2="با طراحی سایت حرفه ای مربوط به کسب و کار خود می توانید بازار هدف را مخاطب قرار داده و افزایش درآمد چشمگیری داشته باشید."
            right
            topMove="20"
            leftMove="60"
            path={video2}
          />
          <SectionComp
            matn1="زیبایی و چشم نوازی"
            matn2="وب سایت های خلاقانه، با تلفیقی از هنر و تکنولوژی با دقت و وسواس خاصی دیزاین می شوند."
            top
            topMove="15"
            leftMove="10"
            path={video3}
          />
          <SectionComp
            matn1="طراحی متناسب با نیاز شما"
            matn2="تمام جنبه های کار شما را در زمان طراحی در نظر می گیریم"
            top
            topMove="30"
            leftMove="10"
            path={video4}
          />
          <SectionComp
            matn1="خلق محتوا "
            matn2="در واقع تنها داشتن یک وبسایت کافی نیست. خلق و‌تولید محتوا و بروزرسانی های منظم وبسایت بر ماندگاری برند، تاثیری عمیق خواهد داشت."
            right
            topMove="40"
            leftMove="60"
            path={video5}
          />
          <SectionComp
            matn1="ریدیزاین وبسایت"
            matn2="یکی از رموز ماندگاری برندها در دنیای وب، انعطاف پذیری و پذیرش سریع تغییرات و تکنولوژی های وب بر اساس درک صحیح از نیاز کاربران است."
            top
            topMove="70"
            leftMove="70"
            path={video6}
          />
          <SectionComp
            matn1="امکانات وب سایت های خلاقانه شما"
            matn2="تصویرسازی های اختصاصی، طراحی اینترکشن و خلق محتوای یونیک طراحی گیمیفیکشن و...."
            down
            topMove="30"
            leftMove="70"
            path={video7}
          />
        </>
      ) : (
        <>
          <SectionComp
            matn1="طراحی منحصر به فرد"
            matn2="با طراحی سایت حرفه ای مربوط به کسب و کار خود می توانید بازار هدف را مخاطب قرار داده و افزایش درآمد چشمگیری داشته باشید."
            right
            topMove="70"
            leftMove="25"
            path={videoMobile2}
          />
          <SectionComp
            matn1="زیبایی و چشم نوازی"
            matn2="وب سایت های خلاقانه، با تلفیقی از هنر و تکنولوژی با دقت و وسواس خاصی دیزاین می شوند."
            top
            topMove="80"
            leftMove="25"
            path={videoMobile3}
          />
          <SectionComp
            matn1="طراحی متناسب با نیاز شما"
            matn2="تمام جنبه های کار شما را در زمان طراحی در نظر می گیریم"
            bottom
            topMove="70"
            leftMove="25"
            path={videoMobile4}
          />
          <SectionComp
            matn1="خلق محتوا "
            matn2="در واقع تنها داشتن یک وبسایت کافی نیست. خلق و‌تولید محتوا و بروزرسانی های منظم وبسایت بر ماندگاری برند، تاثیری عمیق خواهد داشت."
            right
            topMove="80"
            leftMove="25"
            path={videoMobile5}
          />
          <SectionComp
            matn1="ریدیزاین وبسایت"
            matn2="یکی از رموز ماندگاری برندها در دنیای وب، انعطاف پذیری و پذیرش سریع تغییرات و تکنولوژی های وب بر اساس درک صحیح از نیاز کاربران است."
            top
            topMove="90"
            leftMove="25"
            path={videoMobile6}
          />
          <SectionComp
            matn1="امکانات وب سایت های خلاقانه شما"
            matn2="تصویرسازی های اختصاصی، طراحی اینترکشن و خلق محتوای یونیک طراحی گیمیفیکشن و...."
            down
            topMove="70"
            leftMove="30"
            path={videoMobile7}
          />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
