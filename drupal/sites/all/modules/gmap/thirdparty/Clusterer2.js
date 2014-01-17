


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>clusterer/Clusterer2.js at master · melicerte/clusterer · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe134-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (60139581e1) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="43AAEB8F:0365:3D1D764:52D99AE2" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="frMFDfUrhtli4iLkTalk7WrwR/oeAuJHnelt0PpXRWE=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-afd65da2802beafd8aee40df66e8b576092b2913.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-34cbeb4ca792d071bf22ea8aaf266011d130fba0.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-bf5987648bb83690ac0a5e955f74bbaf6ba44c4a.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-699933a3587dc0ee7b7b0da74a61ce88856e55e7.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="66dde61c77b789ef82b8a2a6270e526e">

        <link data-pjax-transient rel='permalink' href='/melicerte/clusterer/blob/169258fbebfbc8ca95cd465a37ce42d20eeefd8f/Clusterer2.js'>
  <meta property="og:title" content="clusterer"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/melicerte/clusterer"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="clusterer - Evolution of Jef&#39;s Poskanzer Clusterer for Google Maps API V3 compliance"/>

  <meta name="description" content="clusterer - Evolution of Jef&#39;s Poskanzer Clusterer for Google Maps API V3 compliance" />

  <meta content="4137883" name="octolytics-dimension-user_id" /><meta content="melicerte" name="octolytics-dimension-user_login" /><meta content="9396430" name="octolytics-dimension-repository_id" /><meta content="melicerte/clusterer" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="9396430" name="octolytics-dimension-repository_network_root_id" /><meta content="melicerte/clusterer" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/melicerte/clusterer/commits/master.atom" rel="alternate" title="Recent Commits to clusterer:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fmelicerte%2Fclusterer%2Fblob%2Fmaster%2FClusterer2.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="melicerte/clusterer"
      data-branch="master"
      data-sha="00476bbf76290fa84ce48189600d2a1f98e41931"
  >

    <input type="hidden" name="nwo" value="melicerte/clusterer" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fmelicerte%2Fclusterer"
    class="minibutton with-count js-toggler-target star-button tooltipped upwards"
    title="You must be signed in to use this feature" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/melicerte/clusterer/stargazers">
      1
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fmelicerte%2Fclusterer"
        class="minibutton with-count js-toggler-target fork-button tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/melicerte/clusterer/network" class="social-count">
        0
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/melicerte" class="url fn" itemprop="url" rel="author"><span itemprop="title">melicerte</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/melicerte/clusterer" class="js-current-repository js-repo-home-link">clusterer</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container  ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/melicerte/clusterer" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /melicerte/clusterer">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/melicerte/clusterer/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /melicerte/clusterer/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/melicerte/clusterer/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /melicerte/clusterer/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/melicerte/clusterer/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /melicerte/clusterer/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/melicerte/clusterer/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /melicerte/clusterer/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/melicerte/clusterer/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /melicerte/clusterer/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/melicerte/clusterer.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/melicerte/clusterer.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/melicerte/clusterer" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/melicerte/clusterer" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/melicerte/clusterer/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:e56729fd6558774843cf2278a249d95e -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/melicerte/clusterer/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/melicerte/clusterer/blob/master/Clusterer2.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/melicerte/clusterer" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">clusterer</span></a></span></span><span class="separator"> / </span><strong class="final-path">Clusterer2.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="Clusterer2.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/b469b38e3daa645cc8dcd070282ab47a?d=https%3A%2F%2Fidenticons.github.com%2F591b3dd7c73395d9ba0712c8142650b9.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/melicerte" rel="author">melicerte</a></span>
    <time class="js-relative-date" datetime="2013-04-12T07:53:39-07:00" title="2013-04-12 07:53:39">April 12, 2013</time>
    <div class="commit-title">
        <a href="/melicerte/clusterer/commit/ce19d5ded1bd6d337bf3320080c90872e0988450" class="message" data-pjax="true" title="Add Clusterer2.js">Add Clusterer2.js</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/b469b38e3daa645cc8dcd070282ab47a?d=https%3A%2F%2Fidenticons.github.com%2F591b3dd7c73395d9ba0712c8142650b9.png&amp;r=x&amp;s=140" width="24" />
            <a href="/melicerte">melicerte</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>431 lines (371 sloc)</span>
        <span>15.805 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped leftwards" href="#"
                 title="You must be signed in to make or propose changes">Edit</a>
          <a href="/melicerte/clusterer/raw/master/Clusterer2.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/melicerte/clusterer/blame/master/Clusterer2.js" class="button minibutton ">Blame</a>
          <a href="/melicerte/clusterer/commits/master/Clusterer2.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped leftwards" href="#"
             title="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>

            </td>
            <td class="blob-line-code">
                    <div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">// Clusterer2.js - marker clustering routines for Google Maps apps</span></div><div class='line' id='LC2'><span class="c1">//</span></div><div class='line' id='LC3'><span class="c1">// Etienne Châtaignier &lt;etienne.chataignier@gmail.com&gt; has coded the following features :</span></div><div class='line' id='LC4'><span class="c1">// Compliance with Google Maps API V3</span></div><div class='line' id='LC5'><span class="c1">// Compliance with ExtInfoWindow for Google Maps API V3</span></div><div class='line' id='LC6'><span class="c1">// </span></div><div class='line' id='LC7'><span class="c1">//</span></div><div class='line' id='LC8'><span class="c1">//</span></div><div class='line' id='LC9'><span class="c1">// Copyright � 2005,2006 by Jef Poskanzer &lt;jef@mail.acme.com&gt;.</span></div><div class='line' id='LC10'><span class="c1">// All rights reserved.</span></div><div class='line' id='LC11'><span class="c1">//</span></div><div class='line' id='LC12'><span class="c1">// Redistribution and use in source and binary forms, with or without</span></div><div class='line' id='LC13'><span class="c1">// modification, are permitted provided that the following conditions</span></div><div class='line' id='LC14'><span class="c1">// are met:</span></div><div class='line' id='LC15'><span class="c1">// 1. Redistributions of source code must retain the above copyright</span></div><div class='line' id='LC16'><span class="c1">//    notice, this list of conditions and the following disclaimer.</span></div><div class='line' id='LC17'><span class="c1">// 2. Redistributions in binary form must reproduce the above copyright</span></div><div class='line' id='LC18'><span class="c1">//    notice, this list of conditions and the following disclaimer in the</span></div><div class='line' id='LC19'><span class="c1">//    documentation and/or other materials provided with the distribution.</span></div><div class='line' id='LC20'><span class="c1">//</span></div><div class='line' id='LC21'><span class="c1">// THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS&#39;&#39; AND</span></div><div class='line' id='LC22'><span class="c1">// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE</span></div><div class='line' id='LC23'><span class="c1">// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</span></div><div class='line' id='LC24'><span class="c1">// ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE</span></div><div class='line' id='LC25'><span class="c1">// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL</span></div><div class='line' id='LC26'><span class="c1">// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS</span></div><div class='line' id='LC27'><span class="c1">// OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)</span></div><div class='line' id='LC28'><span class="c1">// HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT</span></div><div class='line' id='LC29'><span class="c1">// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY</span></div><div class='line' id='LC30'><span class="c1">// OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF</span></div><div class='line' id='LC31'><span class="c1">// SUCH DAMAGE.</span></div><div class='line' id='LC32'><span class="c1">//</span></div><div class='line' id='LC33'><span class="c1">// For commentary on this license please see http://acme.com/license.html</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="c1">// Constructor.</span></div><div class='line' id='LC37'><span class="nx">Clusterer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">map</span><span class="p">){</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">map</span> <span class="o">=</span> <span class="nx">map</span><span class="p">;</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">markers</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">clusters</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentZoomLevel</span> <span class="o">=</span> <span class="nx">map</span><span class="p">.</span><span class="nx">getZoom</span><span class="p">();</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxVisibleMarkers</span> <span class="o">=</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultMaxVisibleMarkers</span><span class="p">;</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">gridSize</span> <span class="o">=</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultGridSize</span><span class="p">;</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">minMarkersPerCluster</span> <span class="o">=</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultMinMarkersPerCluster</span><span class="p">;</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxLinesPerInfoBox</span> <span class="o">=</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultMaxLinesPerInfoBox</span><span class="p">;</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">icon</span> <span class="o">=</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultIcon</span><span class="p">;</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">extInfoWindowId</span> <span class="o">=</span> <span class="s1">&#39;gmap_extinfowindow&#39;</span><span class="p">;</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">addListener</span><span class="p">(</span><span class="nx">map</span><span class="p">,</span> <span class="s1">&#39;bounds_changed&#39;</span><span class="p">,</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">MakeCaller</span><span class="p">(</span><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">boundsChanged</span><span class="p">,</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">map</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">){</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">map</span><span class="p">.</span><span class="nx">infowindow</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">InfoWindow</span><span class="p">();</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">infowindow</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">infowindow</span> <span class="o">=</span> <span class="nx">map</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">;</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">addListener</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">,</span> <span class="s1">&#39;closeclick&#39;</span><span class="p">,</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">MakeCaller</span><span class="p">(</span><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">PopDown</span><span class="p">,</span> <span class="k">this</span><span class="p">));</span></div><div class='line' id='LC57'><span class="p">};</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultMaxVisibleMarkers</span> <span class="o">=</span> <span class="mi">150</span><span class="p">;</span></div><div class='line' id='LC61'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultGridSize</span> <span class="o">=</span> <span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC62'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultMinMarkersPerCluster</span> <span class="o">=</span> <span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC63'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultMaxLinesPerInfoBox</span> <span class="o">=</span> <span class="mi">10</span><span class="p">;</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">defaultIcon</span> <span class="o">=</span> <span class="s1">&#39;http://acme.com/resources/images/markers/blue_large.PNG&#39;</span><span class="p">;</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'><span class="c1">// Call this to change the cluster icon.</span></div><div class='line' id='LC68'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">SetIcon</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">icon</span><span class="p">){</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">icon</span> <span class="o">=</span> <span class="nx">icon</span><span class="p">;</span></div><div class='line' id='LC70'><span class="p">};</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'><span class="c1">// Changes the maximum number of visible markers before clustering kicks in.</span></div><div class='line' id='LC74'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">SetMaxVisibleMarkers</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">){</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxVisibleMarkers</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span></div><div class='line' id='LC76'><span class="p">};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'><span class="c1">// Sets the minumum number of markers for a cluster.</span></div><div class='line' id='LC80'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">SetMinMarkersPerCluster</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">){</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">minMarkersPerCluster</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span></div><div class='line' id='LC82'><span class="p">};</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'><span class="c1">// Sets the maximum number of lines in an info box.</span></div><div class='line' id='LC86'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">SetMaxLinesPerInfoBox</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">){</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxLinesPerInfoBox</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span></div><div class='line' id='LC88'><span class="p">};</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'><span class="c1">// Call this to add a marker.</span></div><div class='line' id='LC92'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">AddMarker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">marker</span><span class="p">,</span> <span class="nx">title</span><span class="p">){</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">map</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">;</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">title</span><span class="p">;</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">marker</span><span class="p">);</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">DisplayLater</span><span class="p">();</span></div><div class='line' id='LC101'><span class="p">};</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'><span class="c1">// Call this to remove a marker.</span></div><div class='line' id='LC105'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">RemoveMarker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">marker</span><span class="p">){</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">==</span> <span class="nx">marker</span><span class="p">){</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span><span class="p">.</span><span class="nx">onMap</span><span class="p">)</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">j</span><span class="p">){</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cluster</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">k</span> <span class="o">&lt;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">k</span><span class="p">)</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">==</span> <span class="nx">marker</span><span class="p">){</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">--</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span><span class="p">;</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span> <span class="o">==</span> <span class="mi">0</span><span class="p">){</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ClearCluster</span><span class="p">(</span><span class="nx">cluster</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">poppedUpCluster</span><span class="p">)</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Clusterer</span><span class="p">.</span><span class="nx">RePop</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">DisplayLater</span><span class="p">();</span></div><div class='line' id='LC131'><span class="p">};</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'><br/></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">boundsChanged</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">){</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When the zoom level changes, we have to remove all the clusters.</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$zoomed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">newZoomLevel</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">getZoom</span><span class="p">();</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">newZoomLevel</span> <span class="o">!=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">currentZoomLevel</span><span class="p">){</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$zoomed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">ClearCluster</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">currentZoomLevel</span> <span class="o">=</span> <span class="nx">newZoomLevel</span><span class="p">;</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Clusterer</span><span class="p">.</span><span class="nx">Display</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">);</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// In case a cluster is currently popped-up, re-pop to get any new</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// markers into the infobox.</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">$zoomed</span><span class="p">){</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Clusterer</span><span class="p">.</span><span class="nx">RePop</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">);</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC158'><span class="p">}</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">DisplayLater</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">MakeCaller</span><span class="p">(</span><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">Display</span><span class="p">,</span> <span class="k">this</span><span class="p">),</span> <span class="mi">50</span><span class="p">);</span></div><div class='line' id='LC165'><span class="p">};</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">Display</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">){</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the current bounds of the visible area.</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span> <span class="nx">marker</span><span class="p">,</span> <span class="nx">cluster</span><span class="p">;</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bounds</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">getBounds</span><span class="p">();</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">bounds</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Expand the bounds a little, so things look smoother when scrolling</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// by small amounts.</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sw</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getSouthWest</span><span class="p">();</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ne</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getNorthEast</span><span class="p">();</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dx</span> <span class="o">=</span> <span class="nx">ne</span><span class="p">.</span><span class="nx">lng</span><span class="p">()</span> <span class="o">-</span> <span class="nx">sw</span><span class="p">.</span><span class="nx">lng</span><span class="p">();</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dy</span> <span class="o">=</span> <span class="nx">ne</span><span class="p">.</span><span class="nx">lat</span><span class="p">()</span> <span class="o">-</span> <span class="nx">sw</span><span class="p">.</span><span class="nx">lat</span><span class="p">();</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">dx</span> <span class="o">&lt;</span> <span class="mi">300</span> <span class="o">&amp;&amp;</span> <span class="nx">dy</span> <span class="o">&lt;</span> <span class="mi">150</span><span class="p">){</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dx</span> <span class="o">*=</span> <span class="mf">0.10</span><span class="p">;</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dy</span> <span class="o">*=</span> <span class="mf">0.10</span><span class="p">;</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bounds</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">LatLngBounds</span><span class="p">(</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">LatLng</span><span class="p">(</span><span class="nx">sw</span><span class="p">.</span><span class="nx">lat</span><span class="p">()</span> <span class="o">-</span> <span class="nx">dy</span><span class="p">,</span> <span class="nx">sw</span><span class="p">.</span><span class="nx">lng</span><span class="p">()</span> <span class="o">-</span> <span class="nx">dx</span><span class="p">),</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">LatLng</span><span class="p">(</span><span class="nx">ne</span><span class="p">.</span><span class="nx">lat</span><span class="p">()</span> <span class="o">+</span> <span class="nx">dy</span><span class="p">,</span> <span class="nx">ne</span><span class="p">.</span><span class="nx">lng</span><span class="p">()</span> <span class="o">+</span> <span class="nx">dx</span><span class="p">));</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Partition the markers into visible and non-visible lists.</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">visibleMarkers</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nonvisibleMarkers</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">marker</span><span class="p">.</span><span class="nx">getPosition</span><span class="p">()))</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visibleMarkers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">marker</span><span class="p">);</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nonvisibleMarkers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">marker</span><span class="p">);</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Take down the non-visible markers.</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">nonvisibleMarkers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span> <span class="o">=</span> <span class="nx">nonvisibleMarkers</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span><span class="p">.</span><span class="nx">onMap</span><span class="p">){</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Take down the non-visible clusters.</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span> <span class="o">!=</span> <span class="kc">null</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span> <span class="o">!=</span> <span class="kc">null</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">getPosition</span><span class="p">())</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">onMap</span><span class="p">){</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Clustering!  This is some complicated stuff.  We have three goals</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// here.  One, limit the number of markers &amp; clusters displayed, so the</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// maps code doesn&#39;t slow to a crawl.  Two, when possible keep existing</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// clusters instead of replacing them with new ones, so that the app pans</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// better.  And three, of course, be CPU and memory efficient.</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">visibleMarkers</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">maxVisibleMarkers</span><span class="p">){</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add to the list of clusters by splitting up the current bounds</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// into a grid.</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">latRange</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getNorthEast</span><span class="p">().</span><span class="nx">lat</span><span class="p">()</span> <span class="o">-</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getSouthWest</span><span class="p">().</span><span class="nx">lat</span><span class="p">();</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">latInc</span> <span class="o">=</span> <span class="nx">latRange</span> <span class="o">/</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">gridSize</span><span class="p">;</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">lngInc</span> <span class="o">=</span> <span class="nx">latInc</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">((</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">getNorthEast</span><span class="p">().</span><span class="nx">lat</span><span class="p">()</span> <span class="o">+</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getSouthWest</span><span class="p">().</span><span class="nx">lat</span><span class="p">())</span> <span class="o">/</span> <span class="mf">2.0</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mf">180.0</span><span class="p">);</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">lat</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getSouthWest</span><span class="p">().</span><span class="nx">lat</span><span class="p">();</span> <span class="nx">lat</span> <span class="o">&lt;=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getNorthEast</span><span class="p">().</span><span class="nx">lat</span><span class="p">();</span> <span class="nx">lat</span> <span class="o">+=</span> <span class="nx">latInc</span><span class="p">)</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">lng</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getSouthWest</span><span class="p">().</span><span class="nx">lng</span><span class="p">();</span> <span class="nx">lng</span> <span class="o">&lt;=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">getNorthEast</span><span class="p">().</span><span class="nx">lng</span><span class="p">();</span> <span class="nx">lng</span> <span class="o">+=</span> <span class="nx">lngInc</span><span class="p">){</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Object</span><span class="p">();</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">clusterer</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">;</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">bounds</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">LatLngBounds</span><span class="p">(</span><span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">LatLng</span><span class="p">(</span><span class="nx">lat</span><span class="p">,</span> <span class="nx">lng</span><span class="p">),</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">LatLng</span><span class="p">(</span><span class="nx">lat</span> <span class="o">+</span> <span class="nx">latInc</span><span class="p">,</span> <span class="nx">lng</span> <span class="o">+</span> <span class="nx">lngInc</span><span class="p">));</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">cluster</span><span class="p">);</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Put all the unclustered visible markers into a cluster - the first</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// one it fits in, which favors pre-existing clusters.</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">visibleMarkers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span> <span class="o">=</span> <span class="nx">visibleMarkers</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">marker</span><span class="p">.</span><span class="nx">inCluster</span><span class="p">){</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">j</span><span class="p">){</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">marker</span><span class="p">.</span><span class="nx">getPosition</span><span class="p">())){</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">marker</span><span class="p">);</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">++</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span><span class="p">;</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">inCluster</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get rid of any clusters containing only a few markers.</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">markerCount</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">minMarkersPerCluster</span><span class="p">){</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">ClearCluster</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Shrink the clusters list.</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="o">--</span><span class="nx">i</span><span class="p">)</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">--</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ok, we have our clusters.  Go through the markers in each</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// cluster and remove them from the map if they are currently up.</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">j</span><span class="p">){</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span> <span class="o">=</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Now make cluster-markers for any clusters that need one.</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span> <span class="o">==</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Figure out the average coordinates of the markers in this</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// cluster.</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xTotal</span> <span class="o">=</span> <span class="mf">0.0</span><span class="p">,</span> <span class="nx">yTotal</span> <span class="o">=</span> <span class="mf">0.0</span><span class="p">;</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">j</span><span class="p">){</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span> <span class="o">=</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xTotal</span> <span class="o">+=</span> <span class="p">(</span><span class="o">+</span><span class="nx">marker</span><span class="p">.</span><span class="nx">getPosition</span><span class="p">().</span><span class="nx">lng</span><span class="p">());</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">yTotal</span> <span class="o">+=</span> <span class="p">(</span><span class="o">+</span><span class="nx">marker</span><span class="p">.</span><span class="nx">getPosition</span><span class="p">().</span><span class="nx">lat</span><span class="p">());</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">location</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">LatLng</span><span class="p">(</span><span class="nx">yTotal</span> <span class="o">/</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span><span class="p">,</span> <span class="nx">xTotal</span> <span class="o">/</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span><span class="p">);</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">Marker</span><span class="p">({</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">position</span><span class="o">:</span> <span class="nx">location</span><span class="p">,</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">icon</span><span class="o">:</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">icon</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">addListener</span><span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">,</span> <span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">MakeCaller</span><span class="p">(</span><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">PopUp</span><span class="p">,</span> <span class="nx">cluster</span><span class="p">));</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Display the visible markers not already up and not in clusters.</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">visibleMarkers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span> <span class="o">=</span> <span class="nx">visibleMarkers</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">marker</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">marker</span><span class="p">.</span><span class="nx">inCluster</span><span class="p">){</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">map</span><span class="p">);</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">marker</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">addDomListener</span><span class="p">(</span><span class="nx">marker</span><span class="p">,</span> <span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span> <span class="nx">Clusterer</span><span class="p">.</span><span class="nx">PopDown</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Display the visible clusters not already up.</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span> <span class="o">=</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">&amp;&amp;</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">getPosition</span><span class="p">())){</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">map</span><span class="p">);</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC338'><span class="p">};</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">PopUp</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cluster</span><span class="p">){</span>    </div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">clusterer</span> <span class="o">=</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">clusterer</span><span class="p">;</span>    </div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="s1">&#39;&lt;table width=&quot;300&quot;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">marker</span> <span class="o">=</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">marker</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">++</span><span class="nx">n</span><span class="p">;</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">icon_marker</span> <span class="o">=</span> <span class="nx">marker</span><span class="p">.</span><span class="nx">getIcon</span><span class="p">();</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;tr&gt;&lt;td&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;img src=&quot;&#39;</span> <span class="o">+</span> <span class="nx">icon_marker</span><span class="p">.</span><span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39;&quot; width=&quot;&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">icon_marker</span><span class="p">.</span><span class="nx">size</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot; height=&quot;&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">icon_marker</span><span class="p">.</span><span class="nx">size</span><span class="p">.</span><span class="nx">height</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/td&gt;&lt;td&gt;&#39;</span> <span class="o">+</span> <span class="nx">marker</span><span class="p">.</span><span class="nx">title</span> <span class="o">+</span> <span class="s1">&#39;&lt;/td&gt;&lt;/tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="o">==</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">maxLinesPerInfoBox</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span> <span class="o">&gt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">maxLinesPerInfoBox</span><span class="p">){</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;tr&gt;&lt;td colspan=&quot;2&quot;&gt;...and &#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span> <span class="o">-</span> <span class="nx">n</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; more&lt;/td&gt;&lt;/tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/table&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">closeInfoWindow</span><span class="p">();</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Clusterer</span><span class="p">.</span><span class="nx">PopDown</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">);</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">openExtInfoWindow</span><span class="p">){</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">openExtInfoWindow</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">extInfoWindowId</span><span class="p">,</span> <span class="nx">html</span><span class="p">,</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">opts</span><span class="p">);</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">.</span><span class="nx">setContent</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">);</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">poppedUpCluster</span> <span class="o">=</span> <span class="nx">cluster</span><span class="p">;</span></div><div class='line' id='LC370'><span class="p">};</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">RePop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">){</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">poppedUpCluster</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">popup</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">clusters</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">marker</span><span class="p">.</span><span class="nx">getPosition</span><span class="p">().</span><span class="nx">equals</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">poppedUpCluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">getPosition</span><span class="p">())){</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span> <span class="nx">clusterer</span><span class="p">.</span><span class="nx">poppedUpCluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">);</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">popup</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">popup</span><span class="p">){</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Clusterer</span><span class="p">.</span><span class="nx">PopDown</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">);</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC389'><span class="p">};</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'><br/></div><div class='line' id='LC392'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">PopDown</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">clusterer</span><span class="p">){</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clusterer</span><span class="p">.</span><span class="nx">poppedUpCluster</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC394'><span class="p">};</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">ClearCluster</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cluster</span><span class="p">){</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">marker</span><span class="p">;</span></div><div class='line' id='LC399'><br/></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">inCluster</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">markers</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">markerCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">poppedUpCluster</span><span class="p">)</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">clusterer</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">onMap</span><span class="p">){</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">.</span><span class="nx">setMap</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cluster</span><span class="p">.</span><span class="nx">onMap</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">clearListeners</span><span class="p">(</span><span class="nx">cluster</span><span class="p">.</span><span class="nx">marker</span><span class="p">,</span> <span class="s1">&#39;click&#39;</span><span class="p">);</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC414'><span class="p">};</span></div><div class='line' id='LC415'><br/></div><div class='line' id='LC416'><br/></div><div class='line' id='LC417'><span class="c1">// This returns a function closure that calls the given routine with the</span></div><div class='line' id='LC418'><span class="c1">// specified arg.</span></div><div class='line' id='LC419'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">MakeCaller</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">arg</span><span class="p">){</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">func</span><span class="p">(</span><span class="nx">arg</span><span class="p">);</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC423'><span class="p">};</span></div><div class='line' id='LC424'><br/></div><div class='line' id='LC425'><span class="nx">Clusterer</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">closeInfoWindow</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">infowindow</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">closeExtInfoWindow</span><span class="p">){</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">closeExtInfoWindow</span><span class="p">();</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC430'><span class="p">}</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06122s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/melicerte/clusterer/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

