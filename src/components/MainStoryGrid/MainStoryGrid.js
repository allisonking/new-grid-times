import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";

    gap: 1px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 4fr 2fr 2fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    background-color: ${COLORS.gray[300]};
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  background: ${COLORS.gray[100]};
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  background: ${COLORS.gray[100]};
  @media ${QUERIES.tabletOnly} {
    border-left: 1px solid ${COLORS.gray[300]};
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0 16px;
    padding-bottom: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: ${COLORS.gray[300]};
`;

const OpinionStoryList = styled(StoryList)`
  background: ${COLORS.gray[100]};
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: revert;
    gap: 32px;
  }
`;

const OpinionSection = styled.section`
  background: ${COLORS.gray[100]};
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    background: ${COLORS.gray[100]};
  }
`;

export default MainStoryGrid;
