import * as React from 'react';
import gsap, {TimelineMax, Power0, Cubic} from 'gsap'
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import './index.scss';
import {Button} from "../../ui/button";
import {IMapServicesToProps, withService} from "../../hoc-helpers/with-service";
import {IService} from "../../../services/model";
import {IRootAppReducerState} from "../../../reducer/model";

const heroImage = require('../../../shared/images/hero.svg');

interface IProps {
    dispatch: Dispatch
}

class Home extends React.Component<IProps, {}> {

    private startAnimation = () => {
        gsap.registerPlugin();
        const hero: any = document.getElementById("hero");
        if (hero) {
            const svgDocHero = hero.contentDocument;
            if (svgDocHero) {
                const circle1 = svgDocHero.getElementById("circle1");
                const circle2 = svgDocHero.getElementById("circle2");
                const circle3 = svgDocHero.getElementById("circle3");
                const circle4 = svgDocHero.getElementById("circle4");
                const circle5 = svgDocHero.getElementById("circle5");
                const circle6 = svgDocHero.getElementById("circle6");

                const tlHeroC1 = new TimelineMax({repeat: -1});
                const tlHeroC2 = new TimelineMax({repeat: -1});
                const tlHeroC3 = new TimelineMax({repeat: -1});
                const tlHeroC4 = new TimelineMax({repeat: -1});
                const tlHeroC5 = new TimelineMax({repeat: -1});
                const tlHeroC6 = new TimelineMax({repeat: -1});

                tlHeroC1.to(circle1, 5, {
                    rotation: 90,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                }).to(circle1, 5, {
                    rotation: 180,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                }).to(circle1, 3, {
                    rotation: 270,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                }).to(circle1, 3, {
                    rotation: 360,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                });

                tlHeroC2.to(circle2, 6, {
                    rotation: 360,
                    transformOrigin: "center",
                    ease: Cubic.easeIn
                });

                tlHeroC3.to(circle3, 20, {
                    rotation: -360,
                    transformOrigin: "center",
                    ease: Cubic.easeIn
                });

                tlHeroC4.to(circle4, 8, {
                    rotation: 90,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                }).to(circle4, 8, {
                    rotation: 180,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                }).to(circle4, 4, {
                    rotation: 270,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                }).to(circle4, 4, {
                    rotation: 360,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                });

                tlHeroC5.to(circle5, 30, {
                    rotation: -360,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                });

                tlHeroC6.to(circle6, 30, {
                    rotation: 360,
                    transformOrigin: "center",
                    ease: Power0.easeIn
                });
            }
        }
    };

    render() {
        return (
            <div className={'home-wrapper'}>
                <div className={'container'}>
                    <div className={'main-info'}>
                        <h1 className={'glitch'} data-text="Break Solana">Break Solana</h1>
                        <p>This quick game gives you the chance to break the most performant blockchain in the world.
                            Every click submits a transaction. At the end, we will show you how close you came to
                            overwhelming the system.</p>
                        <div className={'buttons-block'}>
                            <Button linkTo={'/game'} name={'Play the game'}/>
                            <a href="https://solana.com/category/blog/">Read how it works</a>
                        </div>
                    </div>
                </div>
                <object id={'hero'} data={heroImage} type={'image/svg+xml'} onLoad={this.startAnimation}/>
            </div>
        )
    }
}

const mapServicesToProps: IMapServicesToProps = ({  }: IService) => ({  });

const mapStateToProps = ({}: IRootAppReducerState) => ({});

export default connect(mapStateToProps)(
    withRouter(withService(mapServicesToProps)(Home))
);

