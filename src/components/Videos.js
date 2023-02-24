import useVideoList from "hooks/UsevideoList";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { videos, loading, error, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length} //This is important field to render the next data
          next={() => setPage(page + 8)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((data, i) => (
            <Video
              key={i}
              noq={data.noq}
              title={data.title}
              yId={data.youtubeID}
            />
          ))}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Videos;
