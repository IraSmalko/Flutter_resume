import 'dart:html';

import 'package:flutter/material.dart';
import 'package:resume/util.dart';

import 'custom_icons.dart';

class Resume extends StatefulWidget {
  const Resume({Key key}) : super(key: key);

  @override
  _ResumeState createState() => _ResumeState();
}

class _ResumeState extends State<Resume> {
  double _screenWidth;
  bool _isMobile = false;

  @override
  Widget build(BuildContext context) {
    MediaQueryData queryData = MediaQuery.of(context);
    double screenHeight = queryData.size.height;
    double screenWidth = queryData.size.width;
    _isMobile = screenWidth <= 800;

    if (_screenWidth != null && screenWidth < _screenWidth)
      screenWidth = _screenWidth;
    _screenWidth = screenWidth;

    return Scaffold(
      backgroundColor: Colors.black54,
      body: SingleChildScrollView(
        padding: EdgeInsets.all(_isMobile ? 2 : 18),
        child: Center(
          child: Card(
            elevation: 10,
            margin: EdgeInsets.only(top: _isMobile ? 10 : 24),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(2),
            ),
            child: Container(
              width: _isMobile ? screenWidth : screenWidth / 2,
              child: Column(
                children: <Widget>[
                  Header(_isMobile),
                  Container(
                    color: Colors.black12,
                    child: ContactsContainer(
                      _isMobile,
                      contacts: <Widget>[
                        SizedBox(),
                        Contact(
                            title: "smalko.irina.s@gmail.com",
                            icon: Icons.email),
                        Contact(title: "Kyiv", icon: Icons.pin_drop),
                        Contact(
                            title: "+38 068 033 63 79",
                            icon: Icons.phone_android),
                        Contact(
                            title: "linkedin.com/in/iryna-smalko",
                            icon: CustomIcons.linkdin),
                        SizedBox(),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 24.0),
                    child: ColumnContainer(
                      _isMobile,
                      firstColumn: _firstColumn,
                      secondColumn: _secondColumn,
                    ),
                  ),
                  SizedBox(height: 42.0),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  List<Widget> get _firstColumn {
    return [
      Section(
        title: "WORK EXPERIENCE",
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              TimePeriod(
                title: "Flutter developer",
                subtitle: "UAPAY, Kyiv, Ukraine",
                from: "April 2020",
                to: "Present",
              ),
              const SizedBox(height: 24.0),
              TimePeriod(
                title: "Flutter developer",
                subtitle: "YouDigital, Kyiv, Ukraine",
                from: "August 2019",
                to: "April 2020",
              ),
              const SizedBox(height: 24.0),
              TimePeriod(
                title: "Android Developer",
                subtitle: "Master of Code Global, Cherkasy, Ukraine",
                from: "May 2017",
                to: "April 2019",
              ),
            ],
          ),
        ],
      ),
      Section(
        title: "Professional Skills",
        children: [
          SkillsContainer(
            skills: [
              "Flutter",
              "Kotlin",
              "Java",
              "Dart",
              "RxDart",
              "Flutter_bloc",
              "Android SDK",
              "OOP",
              "Databinding",
              "OkHttp",
              "Retroit",
              "Realm",
              "Architecture components",
              "RxJava2",
              "Branch",
              "Firebase",
              "Google pay",
              "Crashlytics",
              "Git",
              "Internationalization",
              "IOS app distribution",
              "Git flow",
              "Testflight",
              "Jira",
              "Figma",
              "Provider",
            ],
          ),
        ],
      ),
      const SizedBox(height: 24.0),
      DutiesContainer(
        duties: [
          "Implementation of new features",
          "Prototyping, design and technical implementation discussions",
          "Code review",
          "Improving the design of existing code",
          "Supporting the QA team during the testing phase",
          "Contribution of mobile apps",
        ],
      ),
      Section(
        title: "Courses",
        children: [
          TimePeriod(
            title: "Android development",
            url: "http://geekhub.ck.ua",
            subtitle: "GeekHub",
            from: "October 2016",
            to: "April 2017",
          ),
        ],
      ),
    ];
  }

  List<Widget> get _secondColumn {
    return [
      Section(
        title: "Main projects",
        children: [
          Project(
            name: "Financial application",
            from: "April 2020",
            to: "Present",
            role: "Flutter developer",
            technologies: [
              "Dart",
              "Firebase",
              "RxDart",
              "flutter_bloc",
            ],
            links: [],
          ),
          SizedBox(height: 24.0),
          Project(
            name: "App for making deposits and loans",
            from: "August 2019",
            to: "April 202",
            description:
                "The mobile applications for comfortable and quick admittance to the client’s personal deposits and Loans cryptocurrency accounts",
            role: "Flutter developer",
            technologies: [
              "Dart",
              "Internationalization",
              "Provider",
            ],
            links: [],
          ),
          SizedBox(height: 24.0),
          Project(
            name: "Domestic services apps",
            from: "September 2017",
            to: "April 2019",
            description:
                "App for matching clients with proven technicians to solve common household problems oriented for Arabian countries",
            role: "Android Developer",
            technologies: [
              "Kotlin",
              "Android framework",
              "Architecture components",
              "DataBinding",
              "RxJava2",
              "ObjectBox",
              "Retrofit",
              "Firebase",
            ],
            links: [],
          ),
          SizedBox(height: 24.0),
          Project(
            name: "Silent auction app",
            from: "May 2017",
            to: "September 2018",
            description:
                "Silent Auction service. This client allows bidders who are invited to silent auctions to bid on items from their mobile device and manage bids.",
            role: "Android Developer",
            technologies: [
              "Java",
              "Android framework",
              "Realm",
              "Socket",
              "Glide",
              "Branch",
              "OkHttp",
              "Google Maps",
              "Firebase",
            ],
            links: [],
          ),
          Section(
            title: "Education",
            children: [
              TimePeriod(
                title: "Bachelor's in Accounting and audit",
                subtitle:
                    "The Kremenchuk Mykhailo Ostrohradskyi National University",
                from: "September 2012",
                to: "June 2016",
              ),
            ],
          ),
        ],
      ),
    ];
  }

  @override
  State<StatefulWidget> createState() {}
}

class Header extends StatelessWidget {
  final bool isMobile;

  const Header(
    this.isMobile, {
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double basePadding = isMobile ? 12 : 32;

    final textTheme = Theme.of(context).textTheme;
    return Padding(
      padding: EdgeInsets.only(
          left: basePadding,
          right: basePadding,
          top: basePadding,
          bottom: 24.0),
      child: Row(
        children: <Widget>[
          ClipOval(
            child: SizedBox(
              width: isMobile ? 100 : 120,
              height: isMobile ? 100 : 120,
              child: Image.asset("assets/image.jpg"),
            ),
          ),
          SizedBox(width: 24.0),
          Expanded(
            child: LayoutBuilder(
                builder: (BuildContext context, BoxConstraints constraints) {
              return Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text("Iryna Smalko",
                      style: textTheme.headline.copyWith(color: Colors.black)),
                  SizedBox(height: 4.0),
                  Text(
                    "Flutter developer",
                    style: TextStyle(
                        color: const Color(0xFF004d40),
                        fontSize: 18.0,
                        fontWeight: FontWeight.w100),
                  ),
                  SizedBox(height: 4.0),
                  SizedBox(
                    width: constraints.maxWidth,
                    child: Text(
                      "Dedicated Android developer with three years of experience in mobile app development. Strong creative and analytical skills. Team player with an eye for detail.",
                    ),
                  ),
                ],
              );
            }),
          )
        ],
      ),
    );
  }
}

class Section extends StatelessWidget {
  final double width;

  final String title;
  final String link;
  final List<Widget> children;

  const Section({
    Key key,
    this.link,
    @required this.title,
    @required this.children,
    @required this.width,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          SizedBox(height: 24.0),
          Text(
            title,
            style: TextStyle(
              color: const Color(0xFF00796b),
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 8.0),
          ...children,
        ],
      ),
    );
  }
}

class TimePeriod extends StatelessWidget {
  final String title;
  final String subtitle;
  final String url;
  final String from;
  final String to;

  const TimePeriod({
    Key key,
    @required this.title,
    this.url,
    @required this.subtitle,
    @required this.from,
    @required this.to,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          title,
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
          ),
        ),
        if (subtitle.isNotEmpty) SizedBox(height: 8.0),
        Visibility(
          visible: subtitle.isNotEmpty,
          child: Wrap(
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              Text(
                subtitle,
                style: TextStyle(
                  fontSize: 18,
                ),
              ),
              if (url?.isNotEmpty == true) SizedBox(width: 4.0),
              if (url?.isNotEmpty == true)
                Padding(
                  padding: const EdgeInsets.only(bottom: 4),
                  child: Link(url != null ? url : ""),
                ),
            ],
          ),
        ),
        SizedBox(height: 8.0),
        Text("$from – $to", style: textTheme.caption),
      ],
    );
  }
}

class ColumnContainer extends StatelessWidget {
  final bool isMobile;
  final List<Widget> firstColumn;
  final List<Widget> secondColumn;

  const ColumnContainer(
    this.isMobile, {
    Key key,
    @required this.firstColumn,
    @required this.secondColumn,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return isMobile
        ? Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [...firstColumn, ...secondColumn],
          )
        : Row(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
                Expanded(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: firstColumn,
                  ),
                ),
                Expanded(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: secondColumn,
                  ),
                ),
              ]);
  }
}

class ContactsContainer extends StatelessWidget {
  final List<Widget> contacts;
  final bool isMobile;

  const ContactsContainer(
    this.isMobile, {
    Key key,
    this.contacts,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return isMobile
        ? Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12.0),
            child: Column(children: contacts),
          )
        : Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: contacts,
          );
  }
}

class Contact extends StatelessWidget {
  final String title;
  final IconData icon;

  const Contact({
    Key key,
    @required this.title,
    @required this.icon,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(children: <Widget>[
        Padding(
          padding: const EdgeInsets.all(4.0),
          child: Icon(
            icon,
            size: 16.0,
            color: const Color(0xFF00796b),
          ),
        ),
        SizedBox(width: 4.0),
        Text(
          title,
          style: TextStyle(fontSize: 12.0),
        ),
      ]),
    );
  }
}

class SkillsContainer extends StatelessWidget {
  final List<String> skills;

  const SkillsContainer({
    Key key,
    this.skills,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: <Widget>[
        for (final skill in skills)
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
            child: Container(
              decoration: BoxDecoration(
                color: const Color(0xFF00695C).withOpacity(0.80),
                borderRadius: BorderRadius.circular(6.0),
              ),
              padding: const EdgeInsets.all(8.0),
              child: Text(
                "$skill",
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ),
          ),
      ],
    );
  }
}

class DutiesContainer extends StatelessWidget {
  final List<String> duties;

  const DutiesContainer({
    Key key,
    this.duties,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          "Duties: ",
          style: TextStyle(
            color: const Color(0xFF00796b),
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        SizedBox(height: 8.0),
        for (final duty in duties)
          Text(
            "  •  $duty",
            style: TextStyle(
              fontSize: 16,
            ),
          ),
      ],
    );
  }
}

class Link extends StatelessWidget {
  final String url;
  final String title;
  final bool colorize;

  const Link(
    this.url, {
    Key key,
    this.title,
    this.colorize = true,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final themeStyle = DefaultTextStyle.of(context)?.style ??
        Theme.of(context).textTheme.body1;
    TextStyle style = themeStyle.copyWith(decoration: TextDecoration.underline);
    if (colorize) {
      style = style.copyWith(color: Colors.blue);
    }
    return GestureDetector(
      onTap: () => window.open(url, '_blank'),
      child: Text(title ?? url, style: style),
    );
  }
}

class Project extends StatelessWidget {
  final String name;
  final String from;
  final String to;
  final String description;
  final String role;
  final List<String> technologies;
  final List<Link> links;

  const Project({
    Key key,
    this.description,
    @required this.name,
    @required this.from,
    @required this.to,
    @required this.role,
    @required this.technologies,
    @required this.links,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Widget _row(String name, List<Widget> children) {
      if (children.isNotEmpty) {
        return Row(
          children: <Widget>[
            Text(
              "${name}: ",
              style: Theme.of(context)
                  .textTheme
                  .body1
                  .copyWith(fontWeight: FontWeight.bold),
            ),
            Wrap(
              children: <Widget>[
                ...join(children, const Text(", ")),
              ],
            ),
          ],
        );
      } else {
        return SizedBox.shrink();
      }
    }

    Widget _textRow(String name, String text) {
      return RichText(
        text: TextSpan(
          style: DefaultTextStyle.of(context).style.copyWith(fontSize: 16.0),
          children: [
            TextSpan(
              text: "${name}: ",
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            TextSpan(text: text),
          ],
        ),
      );
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        TimePeriod(
          title: name,
          subtitle: "",
          from: from,
          to: to,
        ),
        SizedBox(height: 8.0),
        if (description?.isNotEmpty == true)
          _textRow("Description", description),
        if (description?.isNotEmpty == true) SizedBox(height: 8.0),
        _textRow("Role", role),
        SizedBox(height: 8.0),
        _textRow("Technologies", technologies.join(", ")),
        _row("Links", links),
      ],
    );
  }
}
