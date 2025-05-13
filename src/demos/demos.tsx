function Demos() {
  return (
    <>
      <div className="flex gap-4 bg-white p-10 text-xl font-bold dark:bg-black">
        <div>
          <div className="flex">
            <div className="bg-primary-600 text-primary-100 p-8">Test</div>
            <div className="bg-secondary-200 text-secondary-700 p-8">Test</div>
          </div>
          <div className="flex">
            <div className="bg-primary-200 text-primary-600 p-8">Test</div>
            <div className="bg-secondary-700 text-secondary-200 p-8">Test</div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="bg-primary-600 text-secondary-200 p-8">Test</div>
            <div className="bg-primary-200 text-secondary-700 p-8">Test</div>
          </div>
          <div className="flex">
            <div className="bg-secondary-200 text-primary-600 p-8">Test</div>
            <div className="bg-secondary-700 text-primary-200 p-8">Test</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-2xl">
        <div>
          <p className="font-sans">Julian Teofilov UI Developer</p>
          <p className="font-serif">Julian Teofilov UI Developer</p>
          <p className="font-mono">Julian Teofilov UI Developer</p>
        </div>
        <div className="font-bold">
          <p className="font-sans">Julian Teofilov UI Developer</p>
          <p className="font-serif">Julian Teofilov UI Developer</p>
          <p className="font-mono">Julian Teofilov UI Developer</p>
        </div>
        <div className="italic">
          <p className="font-sans">Julian Teofilov UI Developer</p>
          <p className="font-serif">Julian Teofilov UI Developer</p>
          <p className="font-mono">Julian Teofilov UI Developer</p>
        </div>
      </div>
    </>
  );
}

export default Demos;
