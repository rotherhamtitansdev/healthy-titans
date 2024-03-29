import React from "react";
import { VideoModalProps } from "../../models/Video";
import VideoPlayer from "./VideoPlayer";

const VideoModal = (props: VideoModalProps) => (
  <div onClick={() => props.setHidden(true)} role="none">
    {props.getHidden ? null : (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div
            className="relative w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 mx-3 sm:mx-0"
            data-testid="VideoModal"
          >
            <div
              role="none"
              className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none p-[1.3rem]"
              onClick={(e) => {
                // do not close modal if anything inside modal content is clicked.
                e.stopPropagation();
              }}
            >
              <div className="flex items-start justify-between pb-3 border-b border-solid border-slate-200 rounded-t">
                <h2 className="text-2xl font-semibold text-homepageHeaderSubTitle">
                  {props.video.title}
                </h2>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => props.setHidden(true)}
                  type="button"
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              {props.video.url && <VideoPlayer videoUrl={props.video.url} />}

              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b mx-auto">
                <button
                  className="font-bold bg-titansBrightPink text-white font-bold py-2 px-8 rounded-full"
                  type="button"
                  onClick={() => props.setHidden(true)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </>
    )}
  </div>
);

export default VideoModal;
