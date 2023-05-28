import './webstory.style.css'
export const WebStory = () => {
  return (
    <>

<amp-story-player style={{ width: 370, height: 622 }}>
  <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
    <img
      data-amp-story-player-poster-img=""
      src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
      width={70}
      height={22}
      loading="lazy"
    />
    Stories in AMP - Hello World
  </a>
</amp-story-player>

    </>
  )
}
