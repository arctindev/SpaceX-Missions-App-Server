(this["webpackJsonpspacex-missions-app-ts"]=this["webpackJsonpspacex-missions-app-ts"]||[]).push([[3],{51:function(n,e,t){"use strict";t.d(e,"a",(function(){return w}));var i,o,r,a,c,s=t(5),u=t(0),d=t(3),l=t(2),p=l.c.div(i||(i=Object(d.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 520px;\n  margin: auto;\n  text-align: inherit;\n  margin-bottom: ",";\n\n  @media only screen and (min-width: 768px) {\n    margin: 0; // reseting margin auto\n    margin-bottom: ",";\n  }\n"])),(function(n){return function(n){switch(n){case"mission_label":case"launch_site":return"20px";case"rocket_name_label":return"30px";case"launch_date":return"19px";case"rescue_ships_label":return"17px";default:throw console.error("Type prop should have a string value")}}(n.type)}),(function(n){return function(n){switch(n){case"mission_label":case"launch_date":case"launch_site":return"23px";case"rocket_name_label":return"40px";case"rescue_ships_label":return"17px";default:throw console.error("Type prop should have a string value")}}(n.type)})),x=l.c.h3(o||(o=Object(d.a)(["\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  line-height: ",";\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  margin-bottom: 7px;\n\n  @media only screen and (min-width: 768px) {\n    margin-bottom: 8px;\n    line-height: 19px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeight.default}),(function(n){var e=n.isHeadingBigger,t=n.theme;return e?t.fontSize.m:t.fontSize.s}),(function(n){return n.theme.fontColor.secondary}),(function(n){return n.isHeadingBigger?"19px":"16.41px"}),(function(n){return n.theme.fontSize.m})),h=l.c.p(r||(r=Object(d.a)(["\n  display: inline;\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  margin-top: ",";\n\n  @media only screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n\n  @media only screen and (min-width: 1200px) {\n    font-size: ",";\n    margin-top: ",";\n  }\n"])),(function(n){var e=n.dataTextIsBig,t=n.theme;return e?t.fontWeight.bold:t.fontWeight.default}),(function(n){var e=n.dataTextIsBig,t=n.theme;return e?t.fontSize.xl:t.fontSize.m}),(function(n){return n.dataTextIsBig?"40px":"18.75px"}),(function(n){return n.theme.fontColor.primary}),(function(n){return n.dataTextIsBig?"8px":"0px"}),(function(n){var e=n.dataTextIsBig,t=n.theme;return e?t.fontSize.xl:t.fontSize.xm}),(function(n){return n.dataTextIsBig?"49px":"21.09px"}),(function(n){var e=n.dataTextIsBig,t=n.theme;return e?t.fontSize.xxl:t.fontSize.xm}),(function(n){return n.dataTextIsBig?"12px":"0px"})),m=l.c.span(a||(a=Object(d.a)(["\n  color: ",";\n  background-color: green;\n  margin-left: 9px;\n  border-radius: ",";\n  font-size: ",";\n  padding: 3px 5px 3px 6px;\n  background-color: ",";\n  font-weight: ",";\n  letter-spacing: 0.1em;\n  line-height: 14px;\n"])),(function(n){return n.theme.fontColor.invertedPrimary}),(function(n){return n.theme.borderRadius.allCornersS}),(function(n){return n.theme.fontSize.xs}),(function(n){var e=n.theme;return n.isRecovered?e.componentColor.success:e.componentColor.error}),(function(n){return n.theme.fontWeight.bold})),f=t(1),g=function(n){var e=n.isRecovered;return Object(f.jsx)(m,{isRecovered:e,children:e?"RECOVERED":"UNRECOVERED"})},b=l.c.span(c||(c=Object(d.a)(["\n  position: absolute;\n  padding: 7px 10px;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 16px;\n  background: ",";\n  color: ",";\n  bottom: -30px;\n  right: 55px;\n  border-radius: ",";\n\n  @media only screen and (min-width: 768px) {\n    white-space: nowrap;\n  }\n"])),(function(n){return n.theme.fontWeight.default}),(function(n){return n.theme.fontSize.s}),(function(n){return n.theme.componentColor.primary}),(function(n){return n.theme.fontColor.invertedPrimary}),(function(n){return n.theme.borderRadius.allCornersS})),j=function(n){var e=n.data;return Object(f.jsx)(b,{children:e})},w=function(n){var e=n.headingText,t=n.data,i=n.dataTextIsBig,o=n.type,r=n.hasRecoveredComponent,a=n.isHeadingBigger,c=n.longerData,d=Object(u.useState)(!1),l=Object(s.a)(d,2),m=l[0],b=l[1];return Object(f.jsxs)(p,{type:o,children:[Object(f.jsx)(x,{isHeadingBigger:a,children:e}),t&&Object(f.jsxs)(h,{onMouseEnter:"launch_site"===o?function(){b(!0)}:void 0,onMouseLeave:"launch_site"===o?function(){b(!1)}:void 0,dataTextIsBig:i,children:[t,r&&Object(f.jsx)(g,{isRecovered:r.data}),m&&Object(f.jsx)(j,{data:c})]})]})}},53:function(n,e,t){"use strict";t.r(e);t(0);var i,o,r,a,c=t(3),s=t(2),u=s.c.div(i||(i=Object(c.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  padding: 17px 15px 0px 15px;\n  border-bottom: 1px solid ",";\n  max-width: 1140px;\n  margin: auto;\n\n  @media only screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 36px 25px 0px 25px;\n    max-width: 1200px;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    max-width: 1140px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding: 36px 0px 0px 0px;\n  }\n"])),(function(n){return n.theme.fontColor.primary}),(function(n){return n.theme.componentColor.secondary})),d=s.c.div(o||(o=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 100%;\n  max-width: 520px;\n  justify-content: flex-start;\n\n  @media only screen and (min-width: 768px) {\n    width: 50%;\n    max-width: 425px;\n    margin: 0; // reseting margin auto\n    &:nth-of-type(2n) {\n      text-align: right;\n    }\n  }\n"]))),l=t(51),p=s.c.a(r||(r=Object(c.a)(["\n  padding: 19px 0;\n  background: none;\n  color: ",";\n  border: 2px solid ",";\n  cursor: pointer;\n  margin-bottom: 27px;\n  line-height: 16.41px;\n  font-size: ",";\n  font-weight: ",";\n  width: 100%;\n  text-decoration: none;\n  text-align: center;\n\n  &:focus {\n    outline-offset: 2px;\n    outline: 5px auto blue;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  &:hover {\n    background-color: ",";\n    outline: none;\n  }\n\n  &:active {\n    background: none;\n  }\n\n  @media only screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    width: 160px;\n  }\n"])),(function(n){return n.theme.fontColor.primary}),(function(n){return n.theme.componentColor.primary}),(function(n){return n.theme.fontSize.s}),(function(n){return n.theme.fontWeight.default}),(function(n){return n.theme.componentColor.primary+"15"})),x=s.c.button(a||(a=Object(c.a)(["\n  padding: 19px 0;\n  background: none;\n  color: ",";\n  border: 2px solid ",";\n  cursor: pointer;\n  margin-bottom: 27px;\n  line-height: 16.41px;\n  font-size: ",";\n  font-weight: ",";\n  width: 100%;\n  text-decoration: none;\n  text-align: center;\n  &:hover {\n    background-color: ",";\n  }\n\n  &:active {\n    background: none;\n  }\n\n  @media only screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    width: 160px;\n  }\n"])),(function(n){return n.theme.fontColor.primary}),(function(n){return n.theme.componentColor.primary}),(function(n){return n.theme.fontSize.s}),(function(n){return n.theme.fontWeight.default}),(function(n){return n.theme.componentColor.primary+"15"})),h=t(1),m=function(n){var e=n.buttonText,t=n.articleLink;return n.isLink?Object(h.jsx)(p,{href:t,alt:e,children:e}):Object(h.jsx)(x,{children:e})};e.default=function(n){var e=n.missionData;return Object(h.jsxs)(u,{children:[Object(h.jsxs)(d,{children:[Object(h.jsx)(l.a,{dataTextIsBig:!0,headingText:"MISSION",data:e.mission_name,type:"mission_label"}),Object(h.jsx)(l.a,{hasRecoveredComponent:{data:e.rocket.first_stage.cores[0].land_success},headingText:"ROCKET",data:e.rocket.rocket_name,type:"rocket_name_label"}),Object(h.jsx)(m,{isLink:!0,articleLink:e.links.article_link?e.links.article_link:e.links.video_link,buttonText:"LEARN MORE"})]}),Object(h.jsxs)(d,{children:[Object(h.jsx)(l.a,{headingText:"LAUNCH DATE",data:e.launch_date_local.replace("T"," "),type:"launch_date"}),Object(h.jsx)(l.a,{headingText:"LAUNCH SITE",data:e.launch_site.site_name,longerData:e.launch_site.site_name_long,type:"launch_site"})]})]})}}}]);
//# sourceMappingURL=3.8bd46543.chunk.js.map