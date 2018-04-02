import React from 'react'
import { compose, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { Wrapper } from '../../common/style/theme'
import { Textfield } from '../../common/input'
import { setText, handleSearch } from './redux'
import { SearchButton } from '../../common/button'
import Feed from './Feed'

const enhance = compose(
  connect(state => state, { setText, handleSearch }),
)
const Search = ({ text,loading, image, setText, handleSearch }) => (
  <Wrapper padding="20px 100px" bgColor="#eee" minHeight={"100vh"}>
    <Wrapper>
      <h1>SEARCH</h1>
      <Wrapper display="flex">
        <Textfield
          placeholder="Search Image..."
          onChange={value => setText(value)}
          onKeyUp={code => {
            if(code === 13) {
              handleSearch(text)
            }
          }}
          value={text}
          margin="0px 10px 0px 0px"
          icon="search"
        />
        <SearchButton label="Search" onClick={() => handleSearch(text)} />
      </Wrapper>
      <Wrapper width="100%" margin="10px 0px">
      {
        loading ? <p>Loading</p> : image.map(img => (
          <Feed img={img}/>
        ))
      }
      </Wrapper>
    </Wrapper>
  </Wrapper>
)

export default enhance(Search)


const Loading = () => <p>Loading</p>
