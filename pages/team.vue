<template>
  <div id="doc" class="bg-[var(--primary-color)] bg-img">
    <div class="limit-width">
      <HeaderNav />
    </div>
    <PageHeader title="ISL Team" />
    <div class="limit-width">
      <div class="w-[96%] mx-auto"></div>

      <div class="team-group-container pt-10">
        <h1 class="team-group-header">Faculty</h1>
        <div class="team-members-container">
          <TeamMember
            img="image8801.jpeg"
            name="Sanjay Rao"
            title="Professor"
            area=""
          />
        </div>
      </div>

      <div class="team-group-container">
        <h1 class="team-group-header">Graduate Students</h1>
        <div class="team-members-container">
          <TeamMember
            name="Chandan Bothra"
            title="Ph.D Student"
            area="Causal ML models, Data-driven networking, Internet Video"
            img="5_chandan.jpg"
          />
          <TeamMember
            name="Syed Usman Jafri"
            title="Ph.D. Student"
            area="Online traffic analysis, In-network Computing"
            img="4_usman.jpg"
          />
          <TeamMember
            name="Xinji (Jimmy) Jiang"
            title="Ph.D. Student"
            area="360 degree video"
            img="3_jimmy.jpg"
          />
          <TeamMember
            name="Abd AlRhman AlQiam"
            title="Ph.D. Student"
            area="ML-Driven Network Synthesis"
            img="2_abd.jpg"
          />
          <TeamMember
            name="Zhuocong Li"
            title="Ph.D. student"
            area="P4 and Data plane programming"
            img="placeholder-image.png"
          />
          <TeamMember
            name="Yizhan Qing"
            title="Ph.D. student"
            area=""
            img="placeholder-image.png"
          />
          <TeamMember
            name="Jack Tyler Gardel"
            title="MS student"
            area=""
            img="placeholder-image.png"
          />
        </div>
      </div>

      <div class="team-group-container">
        <h1 class="team-group-header">Undergraduate Students</h1>
        <div class="team-members-container">
          <TeamMember
            name="Clayton Walker"
            title="Undergraduate researcher"
            area="360 degree video"
          />

        </div>
      </div>

      <div class="team-group-container">
        <h1 class="team-group-header">Alumni</h1>
        <div class="alumni-members-container">
          <TeamAlumni
            name="Ehab Ghabashneh"
            title="Ph.D."
            thesis_title="Supporting data center and internet video applications with stringent performance needs: measurements and design"
            graduation_year="2024"
            position="Google"
          /><TeamSeparator />
          
          <TeamAlumni
            name="Zixuan Li"
            degree="MS"
            graduation_year="2023"
           /><TeamSeparator />
          
          <TeamAlumni
            name="Chuan Jiang"
            degree="Ph.D."
            graduation_year="2022"
            thesis_title="Resilient Wide Area Network Routing Algorithms For Meeting Service Level Objectives"
            position="Meta Platforms"
          /><TeamSeparator />

          <TeamAlumni
            name="Russ Shirey"
            degree="Ph.D."
            graduation_year="2021"
            thesis_title="Data-Driven and Control Theoretic Approaches for Real-Time Sensor Data Transmission Over Unmanned Aerial Systems Networks"
            position="US Government Agency"
            co_advisor="Shreyas Sundaram"
          /><TeamSeparator />

          <TeamAlumni
            name="Yun Seong Nam"
            degree="Ph.D."
            graduation_year="2020"
            thesis_title="Characterizing and Optimizing Internet Video Streaming"
            position="Google"
          /><TeamSeparator />

          <TeamAlumni
            name="Sruthi Panchapakesan"
            graduation_year="2020"
           /><TeamSeparator />

          <TeamAlumni
            name="Yiyang Chang "
            degree="Ph.D."
            graduation_year="2019"
            thesis_title="Ensuring Network Designs meet Performance Requirements under Failures"
            position="ByteDance"
          /><TeamSeparator />

          <TeamAlumni
            name="Ashiwan Sivakumar "
            degree="Ph.D."
            graduation_year="2017"
            thesis_title="Scalable Redundant Proxy Execution for low-latency Web over Cellular Networks"
            position="Post-doc @ CMU"
            c_position="AT&T Labs Research"
          /><TeamSeparator />

          <TeamAlumni
            name="Shankaranarayanan Narayanan "
            degree="Ph.D."
            graduation_year="2016"
            thesis_title="A Holistic Approach to Lowering Latency in Geo-distributed Web Applications"
            position="AT&T Labs Research"
          /><TeamSeparator />

          <TeamAlumni
            name="Mohammad Hajjat "
            degree="Ph.D."
            graduation_year="2014"
            thesis_title="Architecting Delay Sensitive Applications for the Cloud"
            position="Microsoft Azure"
            c_position="Roblox"
          /><TeamSeparator />

          <TeamAlumni
            name="Srivathsava Rangarajan "
            degree="MS (Thesis)"
            graduation_year="2014"
            thesis_title="Paxos based directory updates for geo-replicated cloud storage"
            position="Enova"
          /><TeamSeparator />

          <TeamAlumni
            name="Xin Sun "
            degree="Ph.D."
            graduation_year="2012"
            thesis_title="Towards Systematic Migration of Enterprise Networks"
            position="Assistant Professor @ Florida International University"
            c_position="Assistant Professor @ Ball State (Winner of NSF Career Research Initiation Initiative Award)"
          /><TeamSeparator />

          <TeamAlumni
            name="Ruben Torres "
            degree="Ph.D."
            graduation_year="2011"
            thesis_title="Measurement-Driven Characterization of Emerging Trends in Internet Content Delivery"
            position="Narus"
            c_position="Palo Alto Networks"
          /><TeamSeparator />

          <TeamAlumni
            name="Yu-Wei Eric Sung "
            degree="Ph.D."
            graduation_year="2010"
            thesis_title="An Abstraction-Driven Approach to Systematic Enterprise Network Design, Configuration and Validation"
            position="Engineering Manager, Meta; Network Platforms Team"
          /><TeamSeparator />

          <TeamAlumni
            name="Sunil Krothapalli  "
            degree="MS (Thesis)"
            graduation_year="2009"
            position="Cisco"
          /><TeamSeparator />

          <TeamAlumni
            name="Karukurichi Kripashankar "
            degree="MS (Thesis)"
            graduation_year="2009"
            position="Amazon"
          /><TeamSeparator />

          <TeamAlumni
            name="Prashant Garimella "
            degree="MS (Thesis)"
            graduation_year="2008"
            position="Cisco"
          /><TeamSeparator />

          <TeamAlumni
            name="Michael Bishop "
            degree="MS (Thesis)"
            graduation_year="2006"
            position="Microsoft"
          /><TeamSeparator />
        </div>
      </div>

      <div class="team-group-container">
        <h1 class="team-group-header">Visiting Researchers</h1>
        <div class="alumni-members-container">
          <TeamAlumni
            name="Alessandro Finamore"
            note="Visiting Ph.D student, Politecnico Di Torino, Italy"
            time_interval=" Oct 2010 - May 2011"
          /><TeamSeparator />

          <TeamAlumni
            name="José Luis García Dorado"
            note="Visiting Assistant Professor, Universidad Autónoma de Madrid, Spain"
            time_interval="Feb 2014 - July 2014"
          /><TeamSeparator />
        </div>
      </div>

      <div class="team-group-container">
        <h1 class="team-group-header">Undergraduate Students</h1>

        <div class="alumni-members-container">
          <p class="px-5 pb-3 text-justify">
            Several undergraduate students have worked with our laboratory as
            part of Purdue's PURE and SURF programs, or as undergraduate
            research assistants, or for undergradate research credits. Some of
            the work has led to publications and open source software tools, and
            has helped students take up both industry positions, and get
            admitted to top graduate programs.
          </p>

          <TeamAlumni
            name="Anjali Vanamala"
            note="Purdue Computer Engineering. Supported by NSF REU and First Time Researcher Award. Work appeared in Purdue's Spring Undergraduate Research Conference 2023."
            time_interval="2022-23"
          /><TeamSeparator />
          
          <TeamAlumni
            name="Jagan Krishnasamy"
            note="Purdue Computer Engineering. Won Honorable Mention for Purdue ECE's Undergraduate Research Award (2022)."
            time_interval="2022"
          /><TeamSeparator />

           <TeamAlumni
            name="Tanner Andrulis"
            time_interval="2022"
            note="Purdue Computer Engineering. Won ECE's Undergrad Excellence Award in 2021 (TA category) for work on 50863."
            position="Ph.D Student, MIT"
          /><TeamSeparator />

          <TeamAlumni
            name="Nathan Cohen"
            time_interval="2020"
            note="Purdue Computer Science"
          /><TeamSeparator />

          <TeamAlumni
            name="Harsh Agrawal"
            time_interval="2018"
            note="IIT, Hyderabad; PURE Program"
          /><TeamSeparator />


          <TeamAlumni
            name="Touheed Anwar Atif"
            time_interval="2016"
            note="IIT, Hyderabad; PURE Program"
            position="Ph.D. Student, University of Michigan, Ann Arbor"
          /><TeamSeparator />

          <TeamAlumni
            name="Akash Kumar"
            time_interval="2015-2016"
            position="Amazon"
          /><TeamSeparator />

          <TeamAlumni
            name="Zaiwei Zhang"
            time_interval="2014-2015"
            position="Ph.D. Student, University of Texas, Austin"
            /><TeamSeparator />

          <TeamAlumni
            name="Zisheng Liao"
            time_interval="2014"
            position="Masters Student, UIUC"
            /><TeamSeparator />

          <TeamAlumni
            name="Jiawei Wang"
            time_interval="2013"
            position="Masters Student, UPenn"
            /><TeamSeparator />

          <TeamAlumni
            name="Jinliang Wei"
            time_interval="2013"
            position="Ph.D. Student, Carnegie Mellon University"
            /><TeamSeparator />  

          <TeamAlumni
            name="Samuel Oshin"
            time_interval="2011"
            /><TeamSeparator />

          <TeamAlumni
            name="Brian Crone"
            time_interval="2011"
            /><TeamSeparator />

          <TeamAlumni
            name="Andrew Huff"
            time_interval="2011"
            /><TeamSeparator />

          <TeamAlumni
            name="Upsham Dawra"
            time_interval="2010"
            /><TeamSeparator />

          <TeamAlumni
            name="Kee-Shen Quah"
            time_interval="2010"
            position="Masters Student, University of Michigan"
            /><TeamSeparator />  

          <TeamAlumni
            name="Keywhan Chung"
            time_interval="2009"
            position="Ph.D. Student, UIUC"
            /><TeamSeparator />

          <TeamAlumni
            name="Suan-Aik Yeo"
            time_interval="2009"
            note="Nominated by Purdue ECE in Fall 2009 for the Outstanding Undergraduate Researchers award, given by the Computing Research Association. Won the Best Abstract Award in the category Mathematics and Computational Science in the 2010 Purdue Undergraduate Research Poster Symposium."
            /><TeamSeparator />

          <TeamAlumni
            name="Ankit Kuwadekar"
            time_interval="2008"
            /><TeamSeparator />

          <TeamAlumni
            name="Amey Rane"
            time_interval="2008"
            /><TeamSeparator />
          
        </div>
      </div>
    </div>
    <div class="pb-[150px]"></div>
  </div>
</template>




<script type="module">
let teams_divs = [];
export default {
  methods: {
    overlap(element) {
      let topOverlap =
        (window.screen.height - element.getBoundingClientRect().top) /
        window.screen.height;
      if (topOverlap > 0.1) {
        element.classList.toggle("show-up");
        return true;
      }
      return false;
    },

    handleScroll() {
      var filtered = [];
      for (var idx in teams_divs) {
        if (this.overlap(teams_divs[idx])) {
          filtered.push(idx);
        }
      }
      for (var idx in filtered) {
        delete teams_divs[filtered[idx]];
      }
      if (Object.keys(teams_divs).length == 0) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    teams_divs = [];
    let team_div_nodelist = document.querySelectorAll(".team-group-container");
    team_div_nodelist.forEach((team_div) => {
      teams_divs.push(team_div);
      if (team_div.classList.contains("show-up")) {
        team_div.classList.toggle("show-up");
      }
    });
    window.addEventListener("scroll", this.handleScroll);
    // in case height is small.
    this.handleScroll();
  },
};
</script>

