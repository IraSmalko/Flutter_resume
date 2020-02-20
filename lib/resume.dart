import 'dart:html';

import 'package:flutter/material.dart';
import 'package:resume/util.dart';

import 'custom_icons.dart';

class Resume extends StatelessWidget {
  const Resume({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    MediaQueryData queryData = MediaQuery.of(context);
    double screenHeight = queryData.size.height;
    double screenWidth = queryData.size.width;

    return Scaffold(
      backgroundColor: Colors.black54,
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(18.0),
        child: Center(
          child: Card(
            elevation: 10,
            margin: const EdgeInsets.only(top: 24.0),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(2.0),
            ),
            child: Container(
              width: screenWidth / 2,
              child: Column(
                children: <Widget>[
                  Header(),
                  Container(
                    color: Colors.black12,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
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
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          _firstColumn(screenWidth / 2),
                          _secondColumn(screenWidth / 2)
                        ]),
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

  Widget _firstColumn(double width) {
    return Expanded(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Section(
            title: "Professional Skills",
            children: [
              SkillsContainer(
                skills: [
                  "Kotlin",
                  "Java",
                  "Dart",
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
          Section(
            title: "Courses",
            children: [
              TimePeriod(
                title: "Android development",
                subtitle: "GeekHub",
                from: "October 2016",
                to: "April 2017",
              ),
              IconButton(onPressed: () {}, icon: Icon(Icons.link))
            ],
          ),
        ],
      ),
    );
  }

  Widget _secondColumn(double width) {
    return Expanded(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Section(
            title: "WORK EXPERIENCE",
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  TimePeriod(
                    title: "Flutter developer",
                    subtitle: "YouDigital, Kyiv, Ukraine",
                    from: "August 2019",
                    to: "Present",
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
            title: "Main projects",
            children: [
              Project(
                name: "Apps for making deposits and loans",
                from: "August 2019",
                to: "Present",
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
                name: "Domestic services app",
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
            ],
          ),
        ],
      ),
    );
  }
}

class Header extends StatelessWidget {
  const Header({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return Padding(
      padding: const EdgeInsets.only(
          left: 32.0, right: 32.0, top: 32.0, bottom: 24.0),
      child: Row(
        children: <Widget>[
          ClipOval(
            child: SizedBox(
              width: 120.0,
              height: 120.0,
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
                      style: textTheme.headline4.copyWith(color: Colors.black)),
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
                      "Dedicated Android developer with two years of experience in mobile app development. Strong creative and analytical skills. Team player with an eye for detail.",
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
  final String from;
  final String to;

  const TimePeriod({
    Key key,
    @required this.title,
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
        SizedBox(height: 4.0),
        Visibility(
          visible: subtitle.isNotEmpty,
          child: Text(
            subtitle,
            style: TextStyle(
              fontSize: 18,
            ),
          ),
        ),
        SizedBox(height: 4.0),
        Text("$from – $to", style: textTheme.caption),
      ],
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
    @required this.name,
    @required this.from,
    @required this.to,
    @required this.description,
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
        _textRow("Description", description),
        _textRow("Role", role),
        _textRow("Technologies", technologies.join(", ")),
        _row("Links", links),
      ],
    );
  }
}
