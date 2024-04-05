import { Col, Row } from "antd";
import Image from "next/image";
import SynthesisEffect from "../../AnimationEffect/SynthesisEffect";

function Download() {
  return (
    <div className="max-w-screen-xl h-full mx-auto">
      <SynthesisEffect animationType="opacity">
        <Row className="justify-between">
          <Col span={9} className="mt-16 mb-36">
            <h1 className="text-5xl">Download and find your destinations</h1>
            <p className="text-base my-8">
              Tabi Travel, allows users to effortlessly plan their trips and
              book tickets. With intelligent features like reminders and
              location-based assistance, it provides seamless support throughout
              the travel journey, soon to be enhanced with AI integration.
            </p>
            <div className="flex items-center gap-5">
              <a className="opacity-85 hover:opacity-100">
                <Image
                  src="/badge/appstore.svg"
                  alt="App Store"
                  width={182}
                  height={52}
                />
              </a>
              <a className="opacity-85 hover:opacity-100">
                <Image
                  src="/badge/googleplay.svg"
                  alt="CH Play"
                  width={182}
                  height={52}
                />
              </a>
            </div>
          </Col>
          <Col span={10} className="relative overflow-hidden">
            <Image
              className="absolute top-0 left-0"
              src="/test.png"
              alt="Phone"
              width={300}
              height={574}
            />
            <Image
              className="absolute top-10 right-10 -z-[1]"
              src="/test.png"
              alt="Phone"
              width={300}
              height={574}
            />
          </Col>
        </Row>
      </SynthesisEffect>
    </div>
  );
}

export default Download;
