import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../image-components/LandingImg";

const Landing = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-body container">
          <h1 className="title">Glucose Trail - Crystal Ball</h1>
          <p className="subtitle">How does a routine impact diabetes?</p>
          <LandingImg />
        </div>
        <div className="hero-foot container">
          <Link className="button is-info" to="/app">
            Start the Crystal Ball
          </Link>
        </div>
      </div>
      <div className="section container">
        <article className="message is-warning">
          <div className="message-header">
            <p>Disclaimer</p>
          </div>
          <div className="message-body">
            This tool is for illustrative purposes only. Consult your doctor
            before making changes to your current medical routine!
          </div>
        </article>
        <p className="title">FAQ</p>
        <div className="content">
          <p className="subtitle">What does this website do?</p>
          <ul>
            <li>
              The Glucose Trail Crystal Ball uses medical data and estimations
              to calculate what average blood sugar, hemoglobin a1c, and weight
              could look like after a time period of performing the same daily
              routine.
            </li>
          </ul>
          <p className="subtitle">How do I use it?</p>
          <ul>
            <li>
              The Glucose Trail Crystal Ball uses medical data and estimations
              to calculate what average blood sugar, hemoglobin a1c, and weight
              could look like after a time period of performing the same daily
              routine.
            </li>
          </ul>
          <p className="subtitle">How accurate is it?</p>
          <ul>
            <li>
              Everyone's body is different, so this tool takes many liberties to
              assume the baseline health of the "test patients" we've set up in
              the app. Since it's also calculating based on a daily routine
              (which in reality is unlikely to be exactly the same every day)
              the results should be taken with a grain of salt. The tool is not
              prescriptive by any means. It's simply an illustration!
            </li>
          </ul>
        </div>
      </div>
      <div className="container has-text-centered mb-6">
        <p className="is-size-7">
          &copy; Glucose Trail 2021 ~ All Rights Reserved.
        </p>
        <p className="is-size-7">
          Built by{" "}
          <a href="http://saaliklok.com" target="_blank">
            Saalik Lokhandwala
          </a>
          .{" "}
          <a href="http://github.com/saaliklok/glucose-trail-crystal-ball">
            Open Source
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Landing;
