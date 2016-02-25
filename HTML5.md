# HTML5学习笔记

标签（空格分隔）： HTML/CSS

---

## 新增的标签

HTML5新增的标签可以查看[HTML 参考手册](http://www.w3school.com.cn/tags/)
新增的标签主要分为以下6类：

| ID  | 类别       | 元素   |
| ----| ------     | -----  |
|  1  | 结构元素   | header, footer, section, aside, article, nav, figure, figcaption, details, summary |
|  2  | 标识文本元素    | mark, time, wbr, bdi       |
|  3  | 表单与交互元素  | input(新类型), detalist, keygen, meter, progress, command, menu, output, dialog   |
|  4  | 音、视频及插件  | audio, video, source, embed, track
|  5  | Canvas          |	canvas                       |
|  6  | 语言支持        | bdi, rp, rt, ruby, bdo    |


### (1)结构元素
#### 1、header
描述：header标签定义文档的页眉，通常是一些引导和导航信息。它不局限于写在网页头部，也可以写在网页内容里面。通常header标签至少包含（但不局限于）一个标题标记，还可以包括标签，还可以包括表格内容、标识、搜索表单、导航等。

示例：
```html
<header>
    <h1>header标签</h1>
</header>

<p>内容</p>
```

显示效果：
<header>
    <h1>header标签</h1>
</header>

<p>内容</p>

----------

#### 2、footer
描述：footer标签定义section或document的页脚，包含了与页面、文章或是部分内容有关的信息，比如说文章的作者或者日期。作为页面的页脚时，一般包含了版权、相关文件和链接。

示例：
```html
<footer class="footer">
  <p>Copyright &copy;HTML. 那个公司提供技术支持</p>
</footer>
```

显示效果：
<footer class="footer">
  <p>Copyright &copy;HTML. 那个公司提供技术支持</p>
</footer>

----------

#### 3、section
描述：section标签定义文档中的节，表示一段专题性的内容，一般会带有标题，如章节、页眉、页脚或文档中的其它部分。

示例：
```html
<section>
  <h1>PRC</h1>
  <p>The People's Republic of China was born in 1949...</p>
</section>
```

显示效果：
<section>
  <h1>PRC</h1>
  <p>The People's Republic of China was born in 1949...</p>
</section>

----------

#### 4、aside
描述：aside标签用来装载非正文的内容，被视为页面里面一个单独的部分。它包含的内容与页面的主要内容是分开的，可以被删除，而不会影响到网页的内容、章节或是页面所要传达的信息。例如广告，成组的链接，侧边栏等等。

示例：
```html
<p>Me and my family visited The Epcot center this summer.</p>
<aside>
    <h4>Epcot Center</h4>
    The Epcot Center is a theme park in Disney World, Florida.
</aside>
```

显示效果：
<p>Me and my family visited The Epcot center this summer.</p>
<aside>
<h4>Epcot Center</h4>
    The Epcot Center is a theme park in Disney World, Florida.
</aside>

----------


#### 5、article
描述：article代表一个独立的、完整的相关内容块，可独立于页面其它内容使用，常用在一篇博客文章，一个用户评论等等。

示例：
```html
<article>
  <h1>Internet Explorer 9</h1>
  <p>Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月 14 日发布.....</p>
</article>
```

显示效果：
<article>
  <h1>Internet Explorer 9</h1>
  <p>Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月 14 日发布.....</p>
</article>

----------

#### 6、nav
描述：nav标签是一个可以作为页面导航的链接组。

示例：
```html
<nav>
    <a href="index.asp">Home</a>
    <a href="html5_meter.asp">Previous</a>
    <a href="html5_noscript.asp">Next</a>
</nav>
```

显示效果：
<nav>
    <a href="index.asp">Home</a>
    <a href="html5_meter.asp">Previous</a>
    <a href="html5_noscript.asp">Next</a>
</nav>

----------

#### 7、figure & figcaption
描述：用于对元素进行组合。多用于图片与图片描述组合。 figcaption标签定义 figure 元素的标题。”figcaption” 元素应该被置于 “figure”元素的第一个或最后一个子元素的位置。

示例：
```html
<figure>
  <figcaption>Cmd Markdown笔记</figcaption>
  <img src="a.jpg" width="350" height="234" />
</figure>
```

显示效果：
<figure>
  <figcaption>Cmd Markdown笔记</figcaption>
</figure>
![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)

----------

#### 8、details & summary
描述：用于描述文档或文档某个部分的细节。可与summary标签配合使用，summary可以为details定义标题。标题是可见的，用户点击标题时，会显示出details。summary应该是details的第一个子元素。

示例：
```html
<details>
<summary>Copyright 2011.</summary>
<p>All pages and graphics on this web site are the property of W3School.</p>
</details>
```

显示效果：
<details>
<summary>Copyright 2011.</summary>
<p>All pages and graphics on this web site are the property of W3School.</p>
</details>

----------



### (2)标识文本元素
#### 1、mark
描述：mark标签定义带有记号的文本。请在需要突出显示文本时使用 m 标签。

示例：
```html
<p>Do not forget to buy <mark>milk</mark> today.</p>
```

显示效果：
Do not forget to buy `milk` today.

----------

#### 2、time
描述：time标签定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。
该元素能够以机器可读的方式对日期和时间进行编码，这样，举例说，用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。

示例：
```html
<p>我们在每天早上 <time>9:00</time> 开始营业。</p>

<p>我在 <time datetime="2008-02-14">情人节</time> 有个约会。</p>
```

显示效果：
<p>我们在每天早上 <time>9:00</time> 开始营业。</p>
<p>我在 <time datetime="2008-02-14">情人节</time> 有个约会。</p>

----------

#### 3、wbr
描述：表示软换行。与br元素的区别：br元素表示此处必须换行；wbr表示浏览器窗口或父级元素足够宽时（没必要换行时），不换行，而宽度不够时主动在此处换行。

示例：
```html
<p>
如果想学习 AJAX，那么您必须熟悉 XML<wbr>Http<wbr>Request 对象。
</p>
```

显示效果：
如果想学习 AJAX，那么您必须熟悉 XML
Http
Request 对象。

----------

#### 4、bdi
描述：bdi 指的是 bidi隔离。bdi标签允许设置一段文本，使其脱离其父元素的文本方向设置。

示例：
```html
<ul>
<li>Username <bdi>Bill</bdi>:80 points</li>
<li>Username <bdi>Steve</bdi>: 78 points</li>
</ul>
```

显示效果：
<ul>
<li>Username <bdi>Bill</bdi>:80 points</li>
<li>Username <bdi>Steve</bdi>: 78 points</li>
</ul>

----------

### (3)表单与交互元素
#### 1、input(新类型)
描述：新增的类型包括：email， url， number， range，Date Pickers(日期选择器：date, month, week, time, datetime, datetime-local), search, color；

示例：
```html
<form action="#" method="POST">
  email: <input type="email" />
  url: <input type="url" />
  number: <input type="number" />
  range: <input type="range" />
  date: <input type="date" />
  month: <input type="month" />
  week: <input type="week" />
  time: <input type="time" />
  datetime: <input type="datetime" />
  datetime-local: <input type="datetime-local" />
  search: <input type="search" />
  color: <input type="color" />
</form>
```

----------


#### 2、detalist
描述：为input标签定义一个下拉列表，配合option使用。datalist及其选项不会被显示出来，它仅仅是合法的输入值列表。使用 input 元素的 list属性来绑定 datalist。

示例：
```html
<input id="myCar" list="cars" />
<datalist id="cars">
  <option value="BMW">
  <option value="Ford">
  <option value="Volvo">
</datalist>
```

----------

#### 3、keygen
描述：keygen 元素的作用是提供一种验证用户的可靠方法。 
keygen 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键，一个是私钥，一个公钥。 
私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。 
目前，浏览器对此元素的糟糕的支持度不足以使其成为一种有用的安全标准。 

示例：
```html
<form action="#" method="POST">
    Username: <input type="text" name="usr_name" />
    Encryption: <keygen name="security" />
    <input type="submit" />
</form>
```

----------

#### 4、meter
描述：meter标签定义度量衡。仅用于已知最大和最小值的度量。必须定义度量的范围，既可以在元素的文本中，也可以在 min/max 属性中定义。
例子：磁盘用量、查询结果的相关性，等等。
注释：meter 标签不应用于指示进度（在进度条中）。如果标记进度条，请使用 progress 标签。

示例：
```html
<meter value="3" min="0" max="10">十分之三</meter>
<meter value="0.6">60%</meter> 
```
显示效果：
<meter value="3" min="0" max="10">十分之三</meter>
<meter value="0.6">60%</meter> 

----------

#### 5、progress
描述：progress标签运行中的进程。可以使用progress标签来显示JavaScript中耗费时间的函数的进程。

示例：
```html
<progress value="22" max="100"></progress> 
```

----------

#### 6、command & menu
描述：command 元素表示用户能够调用的命令。
command 标签可以定义命令按钮，比如单选按钮、复选框或按钮。只有当command元素位于 menu 元素内时，该元素才是可见的。否则不会显示这个元素，但是可以用它规定键盘快捷键。
没有浏览器支持 command 标签。
只有 Internet Explorer 9 （更早或更晚的版本都不支持）支持 <command> 标签。

menu 标签定义命令的列表或菜单。
menu 标签用于上下文菜单、工具栏以及用于列出表单控件和命令。
目前所有主流浏览器都不支持 <menu> 标签。

示例：
```html
<menu type="toolbar">
 <li><command onclick="alert('Hello World')">Click Me!</command></li>
 <li>
 <menu label="File">
 <button type="button" onclick="file_new()">New...</button>
 <button type="button" onclick="file_open()">Open...</button>
 <button type="button" onclick="file_save()">Save</button>
 </menu>
 </li>
 <li>
 <menu label="Edit">
 <button type="button" onclick="edit_cut()">Cut</button>
 <button type="button" onclick="edit_copy()">Copy</button>
 <button type="button" onclick="edit_paste()">Paste</button>
 </menu>
 </li>
</menu>
```

----------

#### 7、output
描述：output标签定义不同类型的输出，比如脚本的输出。

示例：
```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
   0<input type="range" id="a" value="50">100
   +<input type="number" id="b" value="50">
   =<output name="x" for="a b"></output>
</form>
```

----------

#### 8、dialog
描述：dialog 标签定义对话框或窗口。

示例：
```html
<table border="1">
<tr>
  <th>一月 <dialog open>这是打开的对话窗口</dialog></th>
  <th>二月</th>
  <th>三月</th>
</tr>
<tr>
  <td>31</td>
  <td>28</td>
  <td>31</td>
</tr>
</table>
```

----------


### (4)音、视频及插件
#### １、audio
描述：定义音频，如音乐或其他音频流。

示例：
```html
<audio src="someaudio.wav">
您的浏览器不支持 audio 标签。
</audio>
```

----------

#### ２、video
描述：video标签定义视频，比如电影片段或其他视频流。 

示例：
```html
<video src="movie.ogg" controls="controls">
您的浏览器不支持 video 标签。
</video>
```

----------

#### ３、source
描述：source标签为媒介元素（比如 video 和audio）定义媒介资源。 

示例：
```html
<audio controls>
   <source src="horse.ogg" type="audio/ogg">
   <source src="horse.mp3" type="audio/mpeg">
 Your browser does not support the audio element.
</audio> 
```

----------

#### ４、embed
描述：定义外部的可交互的内容或插件，用来嵌入内容（包括各种媒体）。 
格式可以是Midi,Wav,AIFF,AU,MP3,flash等。可以在不使用插件的情况下操作媒体文件，极大提升用户体验。 

示例：
```html
<embed src="helloworld.swf" width="100px"/>
```

----------

#### ５、track
描述：标签为诸如 video 元素之类的媒介规定外部文本轨道。 
用于规定字幕文件或其他包含文本的文件，当媒介播放时，这些文件是可见的。

示例：
```html
<video width="320" height="240" controls="controls">
  <source src="forrest_gump.mp4" type="video/mp4" />
  <source src="forrest_gump.ogg" type="video/ogg" />
  <track kind="subtitles" src="subs_chi.srt" srclang="zh" label="Chinese">
  <track kind="subtitles" src="subs_eng.srt" srclang="en" label="English">
</video>
```

----------

### (5)Canvas
#### 1、canvas
描述：定义图形，比如图表和其他图像。canvas元素只是图形容器（画布），必须使用脚本来绘制图形。

示例：
```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;"></canvas>
<canvas id="myCanvas1" width="200" height="100" style="border:1px solid #c3c3c3;"></canvas>
<canvas id="myCanvas2" width="200" height="100" style="border:1px solid #c3c3c3;"></canvas>
<canvas id="myCanvas3" width="200" height="100" style="border:1px solid #c3c3c3;"></canvas>
<canvas id="myCanvas4" width="500" height="192" style="border:1px solid #c3c3c3;">
	Your browser does not support the canvas element.
</canvas>
	
<script>
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.fillRect(0,0,150,75);
</script>	
<script>
	var c=document.getElementById("myCanvas1");
	var cxt=c.getContext("2d");
	cxt.moveTo(10,10);
	cxt.lineTo(150,50);
	cxt.lineTo(10,50);
	cxt.stroke();
</script>
<script>
	var c=document.getElementById("myCanvas2");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.beginPath();
	cxt.arc(70,18,15,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
</script>
<script>
	var c=document.getElementById("myCanvas3");
	var cxt=c.getContext("2d");
	var grd=cxt.createLinearGradient(0,0,175,50);
	grd.addColorStop(0,"#FF0000");
	grd.addColorStop(1,"#00FF00");
	cxt.fillStyle=grd;
	cxt.fillRect(0,0,175,50);
</script>
<script>
	var c=document.getElementById("myCanvas4");
	var cxt=c.getContext("2d");
	var img=new Image();
	img.src="../images/age.png";
	cxt.drawImage(img,0,0);
</script>
```

----------

### (6)语言支持
#### 1、bdi
描述：bdi 指的是 bidi 隔离。
bdi 标签允许您设置一段文本，使其脱离其父元素的文本方向设置。
在发布用户评论或其他您无法完全控制的内容时，该标签很有用。

示例：
```html
<!-- 把用户名从周围的文本方向设置中隔离出来： -->
<ul>
<li>Username <bdi>Bill</bdi>:80 points</li>
<li>Username <bdi>Steve</bdi>: 78 points</li>
</ul>
```

----------

#### 2、ruby & rt & rp
描述：ruby 标签定义 ruby 注释（中文注音或字符）。
在东亚使用，显示的是东亚字符的发音。
与 rp 以及 rt 标签一同使用：
ruby 元素由一个或多个字符（需要一个解释/发音）和一个提供该信息的 rt 元素组成，还包括可选的 rp 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。

rp 定义若浏览器不支持 ruby 元素显示的内容
rt 是 ruby注释的解释

示例：
```html
<!-- 一个 ruby 注释： -->
<ruby>
漢 <rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt>
</ruby>
```

----------




