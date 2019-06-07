import 'dart:html';

import 'package:Flutter_resume/util.dart';
import 'package:flutter_web/material.dart';

class Resume extends StatelessWidget {
  const Resume({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          children: <Widget>[
            Header(),
            Section(
              icon: Icon(Icons.account_box),
              title: "Profile",
              children: [
                Text(
                    "Dedicated Android developer with two years of experience in mobile app development. Strong creative and analytical skills. Team player with an eye for detail."),
              ],
            ),
            Section(
              icon: Icon(Icons.work),
              title: "Employment History",
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    TimePeriod(
                      title: Text(
                        "Android Developer at Master of Code Global, Cherkasy, Ukraine",
                      ),
                      from: "May 2017",
                      to: "April 2019",
                    ),
                    const SizedBox(height: 8.0),
                    DutiesContainer(
                      duties: [
                        "Implementation of new features",
                        "Prototyping, design and technical implementation discussions",
                        "Code review",
                        "Improving the design of existing code",
                        "Supporting the QA team during the testing phase",
                      ],
                    ),
                  ],
                ),
              ],
            ),
            Section(
              icon: Icon(Icons.person),
              title: "Professional Skills",
              children: [
                SkillsContainer(
                  skills: [
                    "Kotlin, Java, Android SDK",
                    "OOP, Databinding, Git",
                    "Architecture components, OkHttp",
                    "Retroit, Realm, RxJava2, Branch",
                    "Firebase, Google pay, Crashlytics",
                  ],
                ),
              ],
            ),
            Section(
              icon: Icon(Icons.school),
              title: "Education",
              children: [
                TimePeriod(
                  title: Text(
                    "Bachelor's in Accounting and audit, The Kremenchuk Mykhailo Ostrohradskyi National University",
                  ),
                  from: "September 2012",
                  to: "June 2016",
                ),
              ],
            ),
            Section(
              icon: Icon(Icons.school),
              title: "Courses",
              children: [
                TimePeriod(
                  title: Wrap(
                    children: [
                      Text("Android development, GeekHub ("),
                      Link("http://geekhub.ck.ua"),
                      Text(")"),
                    ],
                  ),
                  from: "October 2016",
                  to: "April 2017",
                ),
              ],
            ),
            Section(
              icon: Icon(Icons.list),
              title: "Main projects",
              children: [
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
    return Row(
      children: <Widget>[
        SizedBox(
          width: 128.0,
          height: 128.0,
          child: Card(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8.0),
            ),
            child: Image.asset("photo.jpeg"),
          ),
        ),
        SizedBox(width: 24.0),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text("Iryna Smalko", style: textTheme.display2.copyWith(color: Colors.black)),
            Text("Mobile Developer", style: textTheme.headline),
            Contact(title: "+38(068)033-63-79", icon: Icons.phone),
            Contact(title: "smalko.irina.s@gmail.com", icon: Icons.email),
          ],
        )
      ],
    );
  }
}

class Section extends StatelessWidget {
  static const _iconSize = 48.0;

  final Widget icon;
  final String title;
  final List<Widget> children;

  const Section({
    Key key,
    @required this.icon,
    @required this.title,
    @required this.children,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        SizedBox(height: 24.0),
        Row(
          children: <Widget>[
            Container(
              width: _iconSize,
              padding: EdgeInsets.only(left: 8.0),
              alignment: Alignment.centerLeft,
              child: icon,
            ),
            Text(title, style: Theme.of(context).textTheme.headline),
          ],
        ),
        SizedBox(height: 8.0),
        Row(
          children: <Widget>[
            SizedBox(width: _iconSize),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: join(children, const Divider()),
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class TimePeriod extends StatelessWidget {
  final Widget title;
  final String from;
  final String to;

  const TimePeriod({
    Key key,
    @required this.title,
    @required this.from,
    @required this.to,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        DefaultTextStyle.merge(
          style: textTheme.title,
          child: title,
        ),
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
    return Row(children: <Widget>[
      Padding(
        padding: const EdgeInsets.all(4.0),
        child: Icon(icon),
      ),
      Text(title),
    ]);
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
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        for (final skill in skills) Text("$skill"),
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
        Text("Duties: ", style: Theme.of(context).textTheme.subtitle),
        for (final duty in duties) Text("  •  $duty"),
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
    final themeStyle = DefaultTextStyle.of(context)?.style ?? Theme.of(context).textTheme.body1;
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
              style: Theme.of(context).textTheme.body1.copyWith(fontWeight: FontWeight.bold),
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
          style: DefaultTextStyle.of(context).style,
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
          title: Text(name),
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
