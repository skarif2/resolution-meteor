import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import { MainLayout } from '../ui/layouts/MainLayout.jsx'
import Resolutions from '../ui/resolutions/Resolutions.jsx'
import ResolutionSingle from '../ui/resolutions/ResolutionSingle.jsx'
import About from '../ui/about/About.jsx'

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Resolutions />)
    })
  }
})

FlowRouter.route('/resolution/:id', {
  action(params) {
    mount(MainLayout, {
      content: (<ResolutionSingle id={params.id} />)
    })
  }
})

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    })
  }
})