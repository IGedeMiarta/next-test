
"use client";

import { Avatar, Card, Dropdown, Navbar, } from "flowbite-react";

export function CustomCard() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/https://placehold.co/600x400"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}

export function CustomNavbar() {
  return (
      <Navbar fluid className="bg-gray-900 mb-5" >
          <Navbar.Brand href="#">
              <img src="https://placehold.co/100" className="mr-3 h-6 sm:h-9" alt="" />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">EjakiBali</span>
          </Navbar.Brand>
          
          <div className="flex md:order-2">
              <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                      <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                  }
              >
              <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">name@flowbite.com</span>
              </Dropdown.Header>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
              <Navbar>
                  <Dropdown label="Settings" inline >
                      <Dropdown.Item>Dashboard</Dropdown.Item>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Item>Earnings</Dropdown.Item>
                      <Dropdown.Item>Sign out</Dropdown.Item>
                  </Dropdown>
              </Navbar>
          </Navbar.Collapse>
      </Navbar>
  );
}
