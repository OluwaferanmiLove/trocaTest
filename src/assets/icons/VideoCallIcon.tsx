import * as React from "react"
import Svg, { Path } from "react-native-svg";

const VideoCallIcon = () => (
  <Svg width={52} height={48} fill="none">
    <Path
      d="M24 28a.968.968 0 0 0 .713-.288A.967.967 0 0 0 25 27v-2h2a.968.968 0 0 0 .713-.288A.967.967 0 0 0 28 24a.97.97 0 0 0-.287-.713A.97.97 0 0 0 27 23h-2v-2a.97.97 0 0 0-.287-.713A.97.97 0 0 0 24 20a.967.967 0 0 0-.712.287A.968.968 0 0 0 23 21v2h-2a.97.97 0 0 0-.713.287A.97.97 0 0 0 20 24c0 .283.096.52.287.712.192.192.43.288.713.288h2v2c0 .283.096.52.288.712A.965.965 0 0 0 24 28Zm-6 4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 16 30V18c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 18 16h12c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v4.5l3.15-3.15c.15-.15.33-.188.538-.113.208.075.312.23.312.463v8.6c0 .233-.104.387-.312.462-.209.075-.388.038-.538-.112L32 25.5V30c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 30 32H18Z"
      fill="#000"
    />
  </Svg>
)

export default VideoCallIcon