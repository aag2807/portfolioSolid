import { Component, createSignal, For } from "solid-js";
import { styled } from "solid-styled-components";
import AOS from 'aos'
import "./TimeLine.css";

AOS.init();

interface TimeObject {
  title: string;
  body: string;
  points?: string[];
  time: number | string;
}

const HorizontalList = styled('ul')`
	display: flex;
	margin: 0;
	padding: 0;
	flex-wrap: wrap;
	li {
		list-style: none;
		padding:0;
		margin-left: 10px;
		&:first-child{
			margin-left:0px;
		}
		&:nth-child(5){
			margin-left:0px;
		}
	}
`

const TimeLine: Component = () => {
  const [list, setList] = createSignal<TimeObject[]>([
    {
      title: "Freelance Developer",
      body: "Started freelancing in mainly web focused projects, helped build reliable, sturdy and trustworthy systems using a variety of different tools.",
      points: [" Angular", "Vue", "React", "Ember","Ionic","Electron","Node",".etc"],
      time: 2019,
    },
    {
      title: "Senior Front-End Developer ",
      body: "My Tasks mainly involve maintaining and creating new internal and public systems created with different technologies.",
      points: ["Vue","Ionic","Angular","React","React Native", "Express"],
      time: 2021,
    },
		{
			title:"Currently",
			body:"I'm currently working, and also doing freelancing. I'm always open to new experiences and working on new projects.",
			time:'Now'
		}
  ]);

  return (
    <section className="cd-timeline js-cd-timeline">
      <div className="container max-width-lg cd-timeline__container">
        <For each={list()}>
          {(item, index) => (
            <div className="cd-timeline__block" data-aos={index() % 2 === 0 ? "fade-right": "fade-left"}>
              <div className="cd-timeline__img cd-timeline__img--picture" />

              <div className="cd-timeline__content text-component"  data-aos="fade-in">
                <h2>{item.title}</h2>
                <p className="color-contrast-medium">{item.body}</p>
                <div style={{ display: "flex", "flex-wrap": "wrap",margin:0,padding:0 }}>
                  <HorizontalList>
                    <For each={item?.points}>
                      {(points) => <li>{points}</li>}
                    </For>
                  </HorizontalList>
                </div>

                <div className="flex justify-between items-center">
                  <span className="cd-timeline__date">{item.time}</span>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};

export default TimeLine;
